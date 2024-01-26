import { Component, OnInit } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { ServiceTypeService } from '../services/service-type.service';
import { RouterModule } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-service-type-list',
  standalone: true,
  imports: [RouterModule, NzListModule, NzSpinModule, NzIconModule, NzButtonModule],
  templateUrl: './service-type-list.component.html',
  styleUrl: './service-type-list.component.css'
})
export class ServiceTypeListComponent implements OnInit{

  data : any[] = [];
  isLoading = false;
  constructor(private serviceTyperService: ServiceTypeService) {

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
  

}
