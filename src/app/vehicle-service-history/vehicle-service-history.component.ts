import { Component, OnInit } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';

import { VehicleIntakeService } from '../services/vehicle-intake.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleIntake } from '../models/VehicleIntake';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-vehicle-service-history',
  standalone: true,
  imports: [FormsModule,RouterModule, ReactiveFormsModule,DatePipe,  NzAlertModule,NzIconModule, NzSpinModule,NzListModule, NzCardModule, NzSelectModule, NzInputModule, NzButtonModule, NzFormModule],
  templateUrl: './vehicle-service-history.component.html',
  styleUrl: './vehicle-service-history.component.css'
})
export class VehicleServiceHistoryComponent implements OnInit {
  
  data:VehicleIntake[] = [ ];
  filterForm = new FormGroup({
    numberPlate: new FormControl('')    
  });

  numberPlate = "";
  isLoading = false;

  constructor(private vehicleIntakeService: VehicleIntakeService) {        
  }

  ngOnInit(): void {
    let numberPlate = sessionStorage.getItem("numberPlate");
    if(numberPlate != null){
      this.filterForm.controls["numberPlate"].setValue(numberPlate);
      this.search();
    }
  }
  
  search(){
    let storeId = Number(localStorage.getItem("storeId"));        
    this.numberPlate = this.filterForm.controls["numberPlate"].value as string;
    sessionStorage.setItem("numberPlate", this.numberPlate);

    if(this.numberPlate != ""){
      this.isLoading = true;
      this.vehicleIntakeService.search({numberPlate: this.numberPlate, storeId: storeId, createdOn: new Date().toDateString(), take: 100, skip: 0}).subscribe(result => {
        this.data = result;
        this.isLoading = false;
      } , err =>{
        this.isLoading = false;
        console.log(err);
      });
    }
    else{
      this.data = [];
    }    
    
  }
}
