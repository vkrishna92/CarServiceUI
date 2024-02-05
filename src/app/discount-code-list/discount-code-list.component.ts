import { Component, OnInit } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzListModule } from 'ng-zorro-antd/list';

import { DiscountCodeService } from '../services/discount-code.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DiscountCode } from '../models/DiscountCode';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-discount-code-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NzAlertModule, NzSpinModule, NzSelectModule, NzIconModule, NzInputModule,NzListModule,  NzButtonModule, NzFormModule,],
  templateUrl: './discount-code-list.component.html',
  styleUrl: './discount-code-list.component.css'
})
export class DiscountCodeListComponent implements OnInit {
  
  isLoading = false;
  

  data: DiscountCode[] = [];
  
  ngOnInit(): void {
    this.getDiscountCodes();  
  }

  constructor(private discountCodeService: DiscountCodeService) {    
    
  }

  getDiscountCodes(){
    this.isLoading = true;
    let storeId = Number(localStorage.getItem('storeId'));
    this.discountCodeService.GetByStoreId(storeId).subscribe(x =>{
      this.data = x.items;
      this.isLoading = false;
    },err =>{
      this.isLoading = false;      
    })
  }


}
