import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

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
}
