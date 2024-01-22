import { Component, OnInit } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleIntake } from '../models/VehicleIntake';
import { VehicleIntakeService } from '../services/vehicle-intake.service';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-vehicle-status',
  standalone: true,
  imports: [ NzSelectModule,ReactiveFormsModule,DatePipe, FormsModule, RouterModule, 
    NzInputModule, NzSpinModule, NzButtonModule, NzFormModule,NzCollapseModule,
    NzDescriptionsModule, NzDividerModule

  ],
  
  templateUrl: './update-vehicle-status.component.html',
  styleUrl: './update-vehicle-status.component.css'
})
export class UpdateVehicleStatusComponent implements OnInit{

  isLoading = false;
  vehicleForm = new FormGroup({
    id: new FormControl(0),
    numberPlate : new FormControl(''),
    customerName : new FormControl(''),
    phone : new FormControl(''),
    storeId : new FormControl(0),
    serviceTypesId : new FormControl(0),
    serviceTypeName : new FormControl(''),
    price : new FormControl(0),
    vehicleType : new FormControl(''),
    status : new FormControl(''),
    createdOn : new FormControl(new Date()),
    createdBy : new FormControl(''),
    modifiedOn : new FormControl(new Date()),
    modifiedBy : new FormControl('')
  });
  vehicleIntakeId = 0;
  status = 'InService';
  constructor(private vehicleIntakeService: VehicleIntakeService, private router: Router, private route: ActivatedRoute) {
    this.vehicleIntakeId = Number(route.snapshot.paramMap.get('id'));    
  }
  ngOnInit(): void {
    this.getVehicleIntake(this.vehicleIntakeId);    
  }

  getVehicleIntake(id: number){
    this.isLoading = true;
    this.vehicleIntakeService.get(id).subscribe(x =>{
      this._setForm(x);
      this.isLoading = false;
    },err =>{
      console.log(err);
      this.isLoading = false;
    })
  }
  markAsDone(){
    this.vehicleForm.controls['status'].setValue('Done');        
    this.isLoading = true;
    let model = this._getFormValue();
    model.status = 'Done';
    this.vehicleIntakeService.update(model).subscribe(x =>{
      this.isLoading = false;
      this.router.navigate(['/vehicle-queue']);
      console.log(x);
    },err =>{
      this.isLoading = false;
      console.log(err); 
    })
  }

  private _getFormValue(){
    let obj = new VehicleIntake();
    obj.id = this.vehicleForm.controls['id'].value as number;
    obj.numberPlate = this.vehicleForm.controls['numberPlate'].value as string;
    obj.customerName = this.vehicleForm.controls['customerName'].value as string;
    obj.phone = this.vehicleForm.controls['phone'].value as string;
    obj.serviceTypesId = this.vehicleForm.controls['serviceTypesId'].value as number;
    obj.vehicleType = this.vehicleForm.controls['vehicleType'].value as string;
    obj.storeId = this.vehicleForm.controls['storeId'].value as number;   
    return obj;
  }

  private _setForm(obj:VehicleIntake){
    this.vehicleForm.patchValue({
      id: obj.id,
      numberPlate: obj.numberPlate,
      customerName: obj.customerName,
      phone : obj.phone,
      storeId : obj.storeId,
      serviceTypesId : obj.serviceTypesId,
      serviceTypeName : obj.serviceType.serviceName,
      vehicleType : obj.vehicleType,
      price : obj.serviceType.price,
      status : obj.status,
      createdBy : obj.createdBy,
      createdOn : obj.createdOn,
      modifiedBy : obj.modifiedBy,
      modifiedOn : obj.modifiedOn
    });
    this.status = obj.status;

    if(this.status == 'Done'){
      this.vehicleForm.disable();
    }
  }

}
