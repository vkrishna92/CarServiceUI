import { Component, OnInit } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertMessage } from '../models/AlertMessage';
import { DiscountCodeService } from '../services/discount-code.service';


@Component({
  selector: 'app-add-edit-discount-code',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NzSwitchModule, NzInputNumberModule, NzAlertModule, NzSpinModule, NzSelectModule, NzInputModule, NzButtonModule, NzFormModule],
  templateUrl: './add-edit-discount-code.component.html',
  styleUrl: './add-edit-discount-code.component.css'
})
export class AddEditDiscountCodeComponent implements OnInit {

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

  ngOnInit(): void {
    
  }

  constructor(private route : ActivatedRoute, private router: Router, private discountCodeService: DiscountCodeService) {     
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

  clickSave(){
    let model = this.discountCodeForm.getRawValue();
    let storeId = Number(localStorage.getItem('storeId'));
    model.storeId = storeId;
    if(this.discountCodeId == 0){
      this.discountCodeService.create(model).subscribe(x =>{
        this.router.navigate(['/discount-codes']);
      },err =>{
        this.alertMsg.message = "An error occured while creating the discount code";
        this.alertMsg.type = "error";
      })
    }else{
      this.discountCodeService.update(model).subscribe(x =>{
        this.router.navigate(['/discount-codes']);
      },err =>{
        this.alertMsg.message = "An error occured while updating the discount code";
        this.alertMsg.type = "error";
      })
    }
  }
  formatterPercent = (value: number): string => `${value} %`;
  parserPercent = (value: string): string => value.replace(' %', '');

}

