import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SendstockService {
  readonly APIUrl = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) { }
  stockname(stock:string){
    return this.http.post<any>(this.APIUrl+'stock/',stock);
  }


}
