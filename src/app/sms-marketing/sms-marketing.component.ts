import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

@Component({
  selector: 'app-sms-marketing',
  standalone: true,
  imports: [
    MatToolbarModule,
    /**NZ Modules */
    NzBreadCrumbModule,
    NzSpinModule,    

    /**AG GRID */
    AgGridAngular,

    /**COMMON */
    RouterModule
  ],
  templateUrl: './sms-marketing.component.html',
  styleUrl: './sms-marketing.component.css'
})
export class SmsMarketingComponent implements OnInit{
  
  /**
   *
   */
  isLoading = false;
  data: any[] = [];
  colDefs: ColDef[] =[]
  constructor() {    
    
  }
  ngOnInit(): void {
    
  }
  onRowDoubleClicked(event: any){
    console.log(event);
  }

}
