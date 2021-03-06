import { Injectable } from '@angular/core';
import {HttpClient, HttpBackend } from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly RegUrl = "http://127.0.0.1:8000/api/register-user";
  readonly logUrl = "http://127.0.0.1:8000/api/token";
  constructor(private http: HttpClient, private handler: HttpBackend, private router: Router) {this.http = new HttpClient(handler); }

  registerUser(user){
    return this.http.post<any>(this.RegUrl,user);
  }

  loginUser(user){
    return this.http.post<any>(this.logUrl,user);
  }

  loggedIn(){
    //return !!localStorage.getItem('token');
    return !!localStorage.getItem('token');
  }

  
  getToken() {
    return localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/aboutus']);
    
  }
}
