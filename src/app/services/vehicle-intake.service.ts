import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { VehicleIntake } from '../models/VehicleIntake';

@Injectable({
  providedIn: 'root'
})
export class VehicleIntakeService {

  baseUrl = environment.apiUrl + 'Vehicle';
  constructor(private http: HttpClient) {

  }

  get(id: number){
    return this.http.get<VehicleIntake>(this.baseUrl + "/" + id);
  }

  getByStoreId(storeId: number){
    return this.http.get<any[]>(this.baseUrl + "/GetByStoreId/" + storeId);
  }

  update(model: any){
    return this.http.put<any>(this.baseUrl, model);
  }

  post(model: any){
    return this.http.post<any>(this.baseUrl+"/", model);
  }
}
