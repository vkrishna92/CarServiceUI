import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated = new BehaviorSubject(false);
  public isLoggedIn$ = this.isAuthenticated.asObservable();
  constructor(private http: HttpClient) { }

  login(loginDto: any){    
    return this.http.post("https://localhost:7098/api/Auth/login",loginDto);
  }

  getCurrentUserRoles(){
    let baseUrl = environment.apiUrl + "UserPermissions";
    return this.http.get(baseUrl);
  }

  getCurrentUserProfile(){
    let baseUrl = environment.apiUrl + "UserPermissions/myprofile";
    return this.http.get(baseUrl);
  }

  updateCurrentUserProfile(model: any){
    let baseUrl = environment.apiUrl + "UserPermissions/myprofile";
    return this.http.put(baseUrl,model);
  }

  changePassword(model: any){
    let baseUrl = environment.apiUrl + "UserPermissions/changepassword";
    return this.http.put(baseUrl,model);
  }

  resetCurrUserPassword(model: any){
    let baseUrl = environment.apiUrl + "UserPermissions/changepassword";
    return this.http.put(baseUrl,model);
  }
}
