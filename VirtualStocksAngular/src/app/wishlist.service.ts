import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  readonly APIUrl = " http://127.0.0.1:8000/api/";

  constructor(private http: HttpClient) { }

  addtowishlist(stock:string):Observable<any[]>{
    return this.http.post<any[]>(this.APIUrl,stock);
  }
}
