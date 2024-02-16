import { Component, OnInit } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { ServiceTypeService } from '../services/service-type.service';
import { Router, RouterModule } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-service-type-list',
  standalone: true,
  imports: [RouterModule,
    MatToolbarModule,
    NzListModule,
    NzSpinModule,
    NzIconModule,
    NzButtonModule,
    NzBreadCrumbModule,

    AgGridAngular    
  ],
  templateUrl: './service-type-list.component.html',
  styleUrl: './service-type-list.component.css'
})
export class ServiceTypeListComponent implements OnInit{

  data : any[] = [];
  isLoading = false;
  colDefs: ColDef[] = [
    { field: "id" },
    { field: "serviceName" },
    { field: "price" },
    { field: "isActive" }
    
  ];
  constructor(private serviceTyperService: ServiceTypeService, private router: Router) {

  }
  ngOnInit(): void {
    this.getServiceTypes();
  }

  getServiceTypes(){
    this.isLoading = true;
    let storeId = Number(localStorage.getItem('storeId'));
    this.serviceTyperService.GetByStoreId(storeId).subscribe(x =>{
      this.data = x.items;
      this.isLoading = false;
    }, err=>{
      console.log(err);
      this.isLoading = false;
    })
  }
  onRowDoubleClicked(event: any){
    this.router.navigate(['/service-type', event.data.id]);
  }
  

}
