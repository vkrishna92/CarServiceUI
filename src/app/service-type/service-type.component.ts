import { Component, OnInit } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertMessage } from '../models/AlertMessage';

import { ServiceTypeService } from '../services/service-type.service';
import { ServiceType } from '../models/ServiceType';


@Component({
  selector: 'app-service-type',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NzSwitchModule, NzAlertModule, NzSpinModule, NzSelectModule, NzInputModule, NzButtonModule, NzFormModule],
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
    description : new FormControl(''),
    price : new FormControl(0, [Validators.required]),
    storeId : new FormControl(0,[Validators.required]),
    isActive : new FormControl(true),
    createdOn : new FormControl(new Date(), [Validators.required]),
    createdBy : new FormControl(''),
    modifiedOn : new FormControl(new Date()),
    modifiedBy : new FormControl('')
  });

 
  constructor(private serviceTypeService: ServiceTypeService, private route : ActivatedRoute, private router: Router) {
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
    serviceType.description = model.description as string;
    serviceType.price = model.price as number;
    serviceType.storeId = storeId;
    serviceType.isActive = model.isActive as boolean;
    serviceType.createdOn = model.createdOn as Date;
    serviceType.createdBy = model.createdBy as string;
    serviceType.modifiedBy = model.modifiedBy as string;
    serviceType.modifiedOn = model.modifiedOn as Date;

    if (serviceType.id == 0){
      this.isLoading = true;
      this.serviceTypeService.create(serviceType).subscribe(x =>{
        this.isLoading = false;
        this.alertMsg.message = "Service Type created successfully";
        this.alertMsg.type = "success";        
      },err =>{
        this.isLoading = false;
        this.alertMsg.message = "Error creating Service Type";
        this.alertMsg.type = "error";
      })
    }
    else{
      this.isLoading = true;
      this.serviceTypeService.update(serviceType).subscribe(x =>{
        this.isLoading = false;
        this.alertMsg.message = "Service Type updated successfully";
        this.alertMsg.type = "success";
      }, err=>{
        this.alertMsg.message = "Error updating Service Type";
        this.alertMsg.type = "error";
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
    this.router.navigate(['/service-type']);
  }

  clickDelete(){
    this.isLoading = true;
    this.serviceTypeService.delete(this.serviceTypeId).subscribe(x =>{
      this.isLoading = false;
     this.router.navigate(['/service-types']);
    }, err=>{
      this.alertMsg.message = "Error deleting Service Type";
      this.alertMsg.type = "error";
      this.isLoading = false;
    })
  }

  private _setForm(obj: ServiceType){
    this.serviceTypeForm.patchValue({
      id : obj.id,
      serviceName : obj.serviceName,
      description : obj.description,
      price : obj.price,
      storeId : obj.storeId,
      isActive : obj.isActive,
      createdBy: obj.createdBy,
      createdOn :obj.createdOn,
      modifiedBy : obj.modifiedBy,
      modifiedOn : obj.modifiedOn
    })
  }



  

  
}
