import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerSMSService {

  baseUrl = environment.apiUrl + "CustomerSMS";

  constructor(private http: HttpClient) { }

  GetByStoreId(storeId: number){
    return this.http.get<any>(this.baseUrl +"/GetByStoreId/"+storeId);
  }

  get(id: number){
    return this.http.get<any>(this.baseUrl + "/"+id);
  }

  create(serviceType: any){
    return this.http.post<any>(this.baseUrl, serviceType);
  }

  update(serviceType: any){
    return this.http.put<any>(this.baseUrl, serviceType);
  }

  delete(id: number){
    return this.http.delete(this.baseUrl + "/"+id);
  }
  
  sendSMS(storeId: number, msg: string){
    const body  = {storeId: storeId, message: msg}
    return this.http.post<any>(this.baseUrl + "/SendSMS/", body);
  }
}
