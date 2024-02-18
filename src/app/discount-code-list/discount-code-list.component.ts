import { Component, OnInit, ViewChild } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDrawerComponent, NzDrawerModule } from 'ng-zorro-antd/drawer';

import { DiscountCodeService } from '../services/discount-code.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DiscountCode } from '../models/DiscountCode';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';

import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddEditDiscountCodeComponent } from '../add-edit-discount-code/add-edit-discount-code.component';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-discount-code-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    AddEditDiscountCodeComponent,
    RouterModule,
    NzAlertModule,    
    NzInputNumberModule,
    NzNoAnimationModule,
    NzSwitchModule,
    NzSpinModule,
    NzSelectModule,
    NzDrawerModule,
    NzIconModule,
    NzInputModule,
    NzListModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzDatePickerModule,
    NzFormModule,
    AgGridAngular
  ],
  templateUrl: './discount-code-list.component.html',
  styleUrl: './discount-code-list.component.css'
})
export class DiscountCodeListComponent implements OnInit {
  
  @ViewChild('drawer') drawer: NzDrawerComponent;
  isLoading = false;
  isDrawerLaoding = false;
  colDefs: ColDef[] = [
    { field: "code" },
    { field: "percentage" },
    { field: 'activeFrom'},
    { field: 'activeTo'},
    { field: "createdOn" },
    {field: "modifiedOn"}
    
  ];
  visible = false;

  data: DiscountCode[] = [];
  selectedRow : any;

  discountCodeForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    code : new FormControl('', [Validators.required]),
    percentage : new FormControl(0, [Validators.required]),
    activeTo : new FormControl(new Date(), [Validators.required]),
    activeFrom : new FormControl(new Date(), [Validators.required]),
    storeId : new FormControl(0, [Validators.required]),
    createdOn : new FormControl(new Date(), [Validators.required]),
    createdBy : new FormControl('', [Validators.required]),
    modifiedOn : new FormControl(new Date(), [Validators.required]),
    modifiedBy : new FormControl('', [Validators.required])
  });
  
  ngOnInit(): void {
    this.getDiscountCodes();  
  }

  constructor(private discountCodeService: DiscountCodeService, private router: Router, private notification: NzNotificationService) {    
    
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
  onRowDoubleClicked(event: any){
     // this.router.navigate(['/discount-code', event.data.id]);
     this.selectedRow = event.data;
     this.discountCodeForm.setValue(this.selectedRow);
     this.visible = true;
  }
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  clickSave(){
    let model = this.discountCodeForm.getRawValue();
    let storeId = Number(localStorage.getItem('storeId'));
    model.storeId = storeId;
    
    if(model.id == 0){
      this.isDrawerLaoding = true;
      this.discountCodeService.create(model).subscribe(x =>{
        // this.router.navigate(['/discount-codes']);       
        this.isDrawerLaoding = false;     
        this.notification.success('Discount code saved successfully',x.code as string, {nzDuration: 2000});
        this.getDiscountCodes();
        this.close();  
               
      },err =>{
        this.isDrawerLaoding = false;
        this.notification.error('An error occured while creating the discount code', '');        
      })
    }else{
      this.isDrawerLaoding = true;
      this.discountCodeService.update(model).subscribe(x =>{
        // this.router.navigate(['/discount-codes']);   
        this.isDrawerLaoding = false;     
        this.notification.success('Discount code saved successfully',model.code as string, {nzDuration: 2000});
        this.getDiscountCodes();
        this.close();        
      },err =>{
        this.isDrawerLaoding = false;
        this.notification.error('An error occured while updating the discount code', '');        
      })
    }
  }
  clickCancel(){
    this.close();
  }
  formatterPercent = (value: number): string => `${value} %`;
  parserPercent = (value: string): string => value.replace(' %', '');

}
