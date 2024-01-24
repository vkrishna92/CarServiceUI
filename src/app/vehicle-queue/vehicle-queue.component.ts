import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { VehicleIntakeService } from '../services/vehicle-intake.service';
import { FormsModule } from '@angular/forms';
import { VehicleIntakeQueryParams } from '../models/VehicleIntakeQueryParams';
import { ScrollingModule } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-vehicle-queue',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterModule, FormsModule, ScrollingModule,
    NzDatePickerModule, NzListModule, NzBadgeModule],
  templateUrl: './vehicle-queue.component.html',
  styleUrl: './vehicle-queue.component.css'
})
export class VehicleQueueComponent implements OnInit{
  data : any[] = [];
  totalRecords = 0;
  selectedDate = new Date();
  constructor(private vehicleIntakeService:VehicleIntakeService) {    
  }
  ngOnInit(): void {
    // this.getvehicleIntakes();
    this.onDateChange(new Date());
  }

  getvehicleIntakes(){
    let storeId = Number(localStorage.getItem('storeId'));
    this.vehicleIntakeService.getByStoreId(storeId).subscribe(x =>{
      this.data = x;
    }, err=>{
      console.log(err);
    })
  }

  getColorByStatus(status: string): string {
    switch (status) {
      case 'InService':
        return 'cyan';
      case 'Done':
        return 'green';
      case 'Warning':
        return 'volcano';
      default:
        return ''; // Set a default color or handle other cases as needed
    }
  }

  onDateChange(result: Date): void {    
    let params = new VehicleIntakeQueryParams();
    params.storeId = Number(localStorage.getItem('storeId'));
    params.createdOn = result.toLocaleDateString();
    params.skip = 0;
    params.take = 0;  

    this.vehicleIntakeService.searchIntake(params).subscribe(x =>{
      this.data = x.items;
      this.totalRecords = x.totalRecords;
    },err =>{
      console.log(err);
    })
  }
  


}
