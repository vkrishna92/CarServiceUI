import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ServiceType } from '../models/ServiceType';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  baseUrl = environment.apiUrl + "ServiceType"
  constructor(private http: HttpClient) { }

  GetByStoreId(storeId: number){
    return this.http.get<any[]>(this.baseUrl +"/GetByStoreId/"+storeId);
  }

  create(serviceType: ServiceType){
    return this.http.post<ServiceType>(this.baseUrl, serviceType);
  }
}
