import { Component, OnInit } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { FormsModule } from '@angular/forms';
import { AlertMessage } from '../models/AlertMessage';
import { ServiceTypeService } from '../services/service-type.service';

@Component({
  selector: 'app-service-type',
  standalone: true,
  imports: [FormsModule, NzAlertModule, NzSpinModule, NzSelectModule, NzInputModule, NzButtonModule, NzFormModule],
  templateUrl: './service-type.component.html',
  styleUrl: './service-type.component.css'
})
export class ServiceTypeComponent implements OnInit{

  alertMsg: AlertMessage = {message:'', type:'info'};
  isLoading = false;
 
  constructor(private serviceTypeService: ServiceTypeService) {
  }
  ngOnInit(): void {
    
  }

  
}
