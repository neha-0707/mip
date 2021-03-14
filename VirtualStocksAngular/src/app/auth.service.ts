import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly RegUrl = "#";
  readonly logUrl = "#";
  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this.RegUrl,user);
  }

  loginUser(user){
    return this.http.post<any>(this.logUrl,user);
  }

  loggedIn(){
    //return !!localStorage.getItem('token');
    return localStorage.getItem('isLoggedIn')=='1';
  }
}
