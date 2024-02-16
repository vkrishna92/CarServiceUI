import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertComponent, NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlertMessage } from '../models/AlertMessage';
import { DiscountCodeService } from '../services/discount-code.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DiscountCode } from '../models/DiscountCode';


@Component({
  selector: 'app-add-edit-discount-code',
  standalone: true,
  imports: [FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatToolbarModule,
    NzSwitchModule,
    NzNotificationModule,
    NzBreadCrumbModule,
    NzInputNumberModule,
    NzAlertModule,
    NzSpinModule, 
    NzSelectModule, 
    NzInputModule, 
    NzButtonModule, 
    NzFormModule],
  templateUrl: './add-edit-discount-code.component.html',
  exportAs: 'appAddEditDiscountCode',
  styleUrl: './add-edit-discount-code.component.css'
})
export class AddEditDiscountCodeComponent implements OnInit {

  @Input() data: any;
  alertMsg: AlertMessage = {message:'', type:'info'};
  
  isLoading = false;
  discountCodeId = 0; 
  discountCodeForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    code : new FormControl('', [Validators.required]),
    percentage : new FormControl(0, [Validators.required]),
    isActive : new FormControl(true, [Validators.required]),
    storeId : new FormControl(0, [Validators.required]),
    createdOn : new FormControl(new Date(), [Validators.required]),
    createdBy : new FormControl('', [Validators.required]),
    modifiedOn : new FormControl(new Date(), [Validators.required]),
    modifiedBy : new FormControl('', [Validators.required])
  });

  @ViewChild('nz-alert') nzAlert : NzAlertComponent;;
  ngOnInit(): void {
    if (this.data != null) {
      this.discountCodeForm.setValue(this.data);
    }
    
  }

  constructor(private route : ActivatedRoute, private router: Router, private discountCodeService: DiscountCodeService, private notification: NzNotificationService) {     
    this.discountCodeId =  Number(this.route.snapshot.paramMap.get('id'));
    if(this.discountCodeId != 0){
      this.getDiscountCode(this.discountCodeId);
    }   
  }

  getDiscountCode(id: number){
    this.isLoading = true;
    this.discountCodeService.get(id).subscribe(x =>{
      this.discountCodeForm.setValue(x);
      this.isLoading = false;
    },err =>{
      this.isLoading = false;
    })
  }

  setForm(val: any){
    this.discountCodeForm.setValue(val);
  }
  clickSave(){
    let model = this.discountCodeForm.getRawValue();
    let storeId = Number(localStorage.getItem('storeId'));
    model.storeId = storeId;
    if(this.discountCodeId == 0){
      this.discountCodeService.create(model).subscribe(x =>{
        // this.router.navigate(['/discount-codes']);       
         this.notification.success('Discount code saved successfully', '');        
      },err =>{
        this.notification.error('An error occured while creating the discount code', '');        
      })
    }else{
      this.discountCodeService.update(model).subscribe(x =>{
        // this.router.navigate(['/discount-codes']);        
        this.notification.success('Discount code saved successfully', '');        
      },err =>{
        this.notification.error('An error occured while updating the discount code', '');        
      })
    }
  }
  clickCancel(){
    this.router.navigate(['/discount-codes']);
  }
  formatterPercent = (value: number): string => `${value} %`;
  parserPercent = (value: string): string => value.replace(' %', '');

}

