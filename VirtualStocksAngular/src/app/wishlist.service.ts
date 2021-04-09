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
    return this.http.post<any[]>(this.APIUrl+'add-watchlist/'+stock,null);
  }
  getwishList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'view-watchlist');
  }
  deletefromwishlist(stock:string):Observable<any[]>
  {
    return this.http.delete<any[]>(this.APIUrl+'delete-watchlist/'+stock);
  }

}
