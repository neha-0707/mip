import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000/";
readonly moversURL="http://127.0.0.1:8000/api/";
  constructor(private http: HttpClient) {}

  getAll():Observable<any[]>{
    return this.http.get<any[]>(this.moversURL+'view-leaderboard');
  }
  getGainers():Observable<any[]>{
    return this.http.get<any[]>(this.moversURL+'gainers');
  }
  getLosers():Observable<any[]>{
    return this.http.get<any[]>(this.moversURL+'losers');
  }
  buyStock(stockid,quantity){
    return this.http.post<any>(this.moversURL+'buy-stock/'+stockid+'/'+quantity,null);
  }
  sellStock(stockid,quantity){
    return this.http.post<any>(this.moversURL+'sell-stock/'+stockid+'/'+quantity,null);
  }
  getTransactions():Observable<any[]>{
    return this.http.get<any[]>(this.moversURL+'view-transactions');
  }
  getPortfolio():Observable<any[]>{
    return this.http.get<any[]>(this.moversURL+'view-portfolio');
  }
  getGraph():Observable<any[]>{
    return this.http.get<any[]>(this.moversURL+'graph');
  }
  updateLeaderboard():Observable<any[]>{
    return this.http.get<any[]>(this.moversURL+'update-leader-board');
  }
  getUserDetails():Observable<any[]>{
    return this.http.get<any[]>(this.moversURL+'user-details');
  }
  getPieGraph():Observable<any[]>{
    return this.http.get<any[]>(this.moversURL+'portfolio-graph');
  }
}
