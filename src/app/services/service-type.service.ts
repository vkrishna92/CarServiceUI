import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  baseUrl = environment.apiUrl + "ServiceType"
  constructor(private http: HttpClient) { }

  GetByStoreId(storeId: number){
    return this.http.get<any[]>(this.baseUrl +"/GetByStoreId/"+storeId);
  }
}
