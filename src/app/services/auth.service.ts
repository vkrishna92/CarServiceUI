import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn = false;
  login(loginDto: any){    
    return this.http.post("https://localhost:7098/api/Auth/login",loginDto);
  }
}
