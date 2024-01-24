import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { ServiceTypeService } from '../services/service-type.service';
import { FormsModule } from '@angular/forms';
import { ServiceType } from '../models/ServiceType';
import { VehicleIntake } from '../models/VehicleIntake';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleIntakeService } from '../services/vehicle-intake.service';
import { AlertMessage } from '../models/AlertMessage';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-vehicle-intake',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, NzAlertModule, NzSpinModule, NzSelectModule, NzInputModule, NzButtonModule, NzFormModule, MatButtonModule,MatInputModule],
  templateUrl: './vehicle-intake.component.html',
  styleUrl: './vehicle-intake.component.css'
})
export class VehicleIntakeComponent implements OnInit {
  
  serviceTypes : ServiceType[]= [];
  serviceType = new ServiceType();
  isLoading = false;
  
  /**Form Template variables */
  vehicleIntakeId = 0;
  customerName = '';
  numberPlate = '';
  phone = '';
  vehicleStatus = '';
  vehicleType = 'Sedan';
  alertMsg: AlertMessage = {message:'', type:'info'};
  constructor(private router: Router,public auth: AuthService, private vehicleIntakeService: VehicleIntakeService, private serviceTypeApi: ServiceTypeService, private route: ActivatedRoute) {  
    this.vehicleIntakeId = Number(route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.getServices();
  }

  getServices(){
    let storeId = Number(localStorage.getItem('storeId'));
    this.serviceTypeApi.GetByStoreId(storeId).subscribe(x =>{
      this.serviceTypes = x;
    })
  }
  onServiceTypeSelection(val: any){
    this.serviceType = val;
  }

  clickAccept(){
    this.isLoading = true;
    let model = new VehicleIntake();
    model.id = this.vehicleIntakeId;
    model.customerName = this.customerName;
    model.numberPlate = this.numberPlate;
    model.phone = this.phone;
    model.serviceTypesId = this.serviceType.id;
    model.status = 'InService';
    model.vehicleType = this.vehicleType;
    model.storeId = Number(localStorage.getItem('storeId'));
    
    console.log(model);

    this.vehicleIntakeService.post(model).subscribe(x =>{
      this.isLoading = false;
      console.log(x)
      this.alertMsg = {type:'success', message:'Vehicle '+model.numberPlate+' added to queue.'}
      this.resetForm();
            
    },err =>{
      this.isLoading = false;
      console.log(err);
    })
  }

  clickCancel(){
    
  }

  private resetForm(){
    this.vehicleIntakeId = 0;
    this.numberPlate = '';
    this.customerName = '';
    this.phone = '';
    this.serviceType = new ServiceType();
    this.vehicleType = 'Sedan';    
  }
}
