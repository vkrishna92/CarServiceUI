import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginDto: any){
    return this.http.post("https://localhost:7098/api/Auth/login",loginDto);
  }
}
