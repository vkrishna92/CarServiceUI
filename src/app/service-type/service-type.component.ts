import { Component, OnInit } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertMessage } from '../models/AlertMessage';
import { ServiceTypeService } from '../services/service-type.service';
import { ServiceType } from '../models/ServiceType';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-type',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, NzAlertModule, NzSpinModule, NzSelectModule, NzInputModule, NzButtonModule, NzFormModule],
  templateUrl: './service-type.component.html',
  styleUrl: './service-type.component.css'
})
export class ServiceTypeComponent implements OnInit{

  alertMsg: AlertMessage = {message:'', type:'info'};
  isLoading = false;
  serviceTypeId = 0;
  serviceTypeForm = new FormGroup({
    id: new FormControl(0),
    serviceName : new FormControl('',[Validators.required]),
    price : new FormControl(0, [Validators.required]),
    storeId : new FormControl(0,[Validators.required]),
    createdOn : new FormControl(new Date(), [Validators.required]),
    createdBy : new FormControl(''),
    modifiedOn : new FormControl(new Date()),
    modifiedBy : new FormControl('')
  });

 
  constructor(private serviceTypeService: ServiceTypeService, private route : ActivatedRoute) {
  }
  ngOnInit(): void {
    this.serviceTypeId =  Number(this.route.snapshot.paramMap.get('id'));

    if(this.serviceTypeId != 0){
      this.getServiceType(this.serviceTypeId);
    }
  }

  clickSave(){
    
    let model = this.serviceTypeForm.getRawValue();
    let storeId = Number(localStorage.getItem('storeId'));
    let serviceType = new ServiceType();

    serviceType.id = this.serviceTypeId;
    serviceType.serviceName = model.serviceName as string;
    serviceType.price = model.price as number;
    serviceType.storeId = storeId;
    serviceType.createdOn = model.createdOn as Date;
    serviceType.createdBy = model.createdBy as string;
    serviceType.modifiedBy = model.modifiedBy as string;
    serviceType.modifiedOn = model.modifiedOn as Date;

    if (serviceType.id == 0){
      this.isLoading = true;
      this.serviceTypeService.create(serviceType).subscribe(x =>{
        this.isLoading = false;
      },err =>{
        this.isLoading = false;
      })
    }
    else{
      this.isLoading = true;
      this.serviceTypeService.update(serviceType).subscribe(x =>{
        this.isLoading = false;
      }, err=>{
        this.isLoading = false;
      })
    }
  }

  getServiceType(id: number){
    //Set form
    this.isLoading = true;
    this.serviceTypeService.get(id).subscribe(x =>{
      console.log(x)
      this._setForm(x);
      this.isLoading = false;
    },err =>{
      this.isLoading = false;
      console.log(err);
    })
  }

  clickCancel(){

  }

  clickDelete(){

  }

  private _setForm(obj: ServiceType){
    this.serviceTypeForm.patchValue({
      id : obj.id,
      serviceName : obj.serviceName,
      price : obj.price,
      storeId : obj.storeId,
      createdBy: obj.createdBy,
      createdOn :obj.createdOn,
      modifiedBy : obj.modifiedBy,
      modifiedOn : obj.modifiedOn
    })
  }



  

  
}
