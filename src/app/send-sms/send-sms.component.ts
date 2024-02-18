import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatStepper, MatStepperModule} from '@angular/material/stepper';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule, NzSelectSizeType } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { CustomerSMSService } from '../services/customer-sms.service';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { Router } from '@angular/router';
import { NzResultMessage } from '../models/NzResultMessage';

@Component({
  selector: 'app-send-sms',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatStepperModule,

    NzBreadCrumbModule,
    NzSpinModule,
    NzInputModule,
    NzDropDownModule,
    NzSelectModule,
    NzFormModule,
    NzButtonModule,
    NzResultModule,
    NzModalModule,

    FormsModule
  ],
  templateUrl: './send-sms.component.html',
  styleUrl: './send-sms.component.css'
})
export class SendSMSComponent implements OnInit{

  isVisible = false
  inputValue: string = '';  
  susccessCount: number = 0;
  isLoading = false;
  summaryMsg = new NzResultMessage();
  isDelivered = false;
  @ViewChild('stepper') stepper: MatStepper;
  ngOnInit(): void {
   
  }

  
  constructor(private modal: NzModalService, private smsService: CustomerSMSService, private router: Router) {
    
  }
  clickNext(){
    this.isVisible = true;    
  }
  clickBack(){
    this.stepper.previous();
  }
  handleCancel(){
    this.isVisible = false;
  }
  handleOk(){
    this.isVisible = false;
    this.confirm();
    this.stepper.next();
  }

  confirm(){
    let msg = this.inputValue;
    let storeId = Number(localStorage.getItem('storeId'));
    this.sendSMS();
  }

  sendSMS(){
    let msg = this.inputValue;
    this.isLoading = true;
    let storeId = Number(localStorage.getItem('storeId'));
    this.smsService.sendSMS(storeId, msg).subscribe(x =>{
      this.susccessCount = x;
      this.isLoading = false;
      this.isDelivered = true;
    }, err=>{
      this.isDelivered = false;
      this.isLoading = false;
    })
  }

  viewHistory(){
    this.router.navigate(['/sms-marketing']);
  }
  sendAgain(){
    this.inputValue = '';
    let nzResult = new NzResultMessage();
    nzResult.message = "SMS Sent Successfully";
    nzResult.subtitle = "SMS has been sent successfully to all the customers";
    nzResult.status = "success";
    this.summaryMsg = nzResult;
    this.stepper.reset();
  }


}
