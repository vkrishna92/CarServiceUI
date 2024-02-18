import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { CustomerSMSService } from '../services/customer-sms.service';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-sms-marketing',
  standalone: true,
  imports: [
    MatToolbarModule,
    /**NZ Modules */
    NzBreadCrumbModule,
    NzSpinModule,    
    NzButtonModule,

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
  colDefs: ColDef[] =[
    { field: "name", headerName:"Customer Name" },
    { field: "phone", headerName:"Phone" },
    { field: "message", headerName:"Message" },
    { field: "createdOn", headerName:"Sent On" }
  ]
  constructor(private customerSMSService: CustomerSMSService) {    
    
  }
  ngOnInit(): void {
    this.getSMSHistory();
  }
  onRowDoubleClicked(event: any){
    console.log(event);
  }

  getSMSHistory(){
    this.isLoading = true;
    let storeId = Number(localStorage.getItem('storeId'));
    this.customerSMSService.GetByStoreId(storeId).subscribe((res: any) => {
      this.data = res;
      this.isLoading = false;
    });
  }

}
