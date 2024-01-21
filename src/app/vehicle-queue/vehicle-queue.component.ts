import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

import { VehicleIntakeService } from '../services/vehicle-intake.service';


@Component({
  selector: 'app-vehicle-queue',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterModule, NzListModule, NzBadgeModule],
  templateUrl: './vehicle-queue.component.html',
  styleUrl: './vehicle-queue.component.css'
})
export class VehicleQueueComponent implements OnInit{
  data : any[] = [];
  constructor(private vehicleIntakeService:VehicleIntakeService) {    
  }
  ngOnInit(): void {
    this.getvehicleIntakes();
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
  
}
