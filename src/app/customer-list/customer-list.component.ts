import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CustonerService } from '../services/custoner.service';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [

    /** Material Modules */
    MatToolbarModule,
    
    /**NZ Modules */
    NzBreadCrumbModule,
    NzSpinModule,

    /**AG GRID */
    AgGridAngular
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{
  
  isLoading = false;
  
  /**AG GRID VARS */
  data: any[] = [];
  colDefs: ColDef[] = [
    { field: "name" },
    { field: "email" },
    { field: "phone" },
    { field: "addressline1" },    
    { field: "city" },
    { field: "state" },
    { field: "zip" },
    { field: "country" }, // Added country field
    { field: "createdOn" },
    { field: "modifiedOn" }
  ];

  constructor(private customerService: CustonerService) {    
  }

  ngOnInit(): void {  
    this.getCustomers()  
  }

  onRowDoubleClicked(event: any){
    console.log(event);
  }

  getCustomers(){
    this.isLoading = true;
    let storeId = Number(localStorage.getItem('storeId'));
    this.customerService.GetByStoreId(storeId).subscribe((res: any) => {
      this.data = res;
      this.isLoading = false;
    });
  }
  
}
