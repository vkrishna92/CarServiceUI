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
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleIntakeService } from '../services/vehicle-intake.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleIntake } from '../models/VehicleIntake';


@Component({
  selector: 'app-service-invoice',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,DatePipe,NzDescriptionsModule,  NzAlertModule,NzIconModule, NzSpinModule,NzListModule, NzCardModule, NzSelectModule, NzInputModule, NzButtonModule, NzFormModule],
  templateUrl: './service-invoice.component.html',
  styleUrl: './service-invoice.component.css'
})
export class ServiceInvoiceComponent implements OnInit{

  data : VehicleIntake  = new VehicleIntake();
  isLoading = false;
  constructor(private vehicleIntakeService: VehicleIntakeService, private router: Router, private route: ActivatedRoute) {    
  }
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null){
      this.vehicleIntakeService.get(Number(id)).subscribe(result => {
        this.data = result;
        this.isLoading = false;
      } , err =>{
        this.isLoading = false;
        console.log(err);
      });
    }
  }
  clickBack(){
    window.history.back();
  }
}
