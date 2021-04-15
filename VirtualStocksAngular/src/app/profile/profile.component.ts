import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
urlgraph:any;
urlgraph1:any;
errmsg:any;
userDeets:any;
  constructor(private service:SharedService) {}

  ngOnInit(): void {
this.getGraph();
this.getUserDetails();
this.getPieGraph();
  }
  getGraph()
  {
    this.service.getGraph().subscribe(res=>{
      this.urlgraph=res;
     
    },
    err=>{
      this.errmsg=err;
      this.urlgraph=err["error"]["text"];
      console.log(err["error"]["text"]);}) 
  }
  getPieGraph()
  {
    this.service.getPieGraph().subscribe(res=>{
      this.urlgraph1=res;
    },
    err=>{
      this.errmsg=err;
      this.urlgraph1=err["error"]["text"];
      console.log(err["error"]["text"]);}) 
  }
  getUserDetails()
  {
   
    this.service.getUserDetails().subscribe(res=>{
      this.userDeets=res;
      console.log(this.userDeets);
  
    },
    err=>{console.log(err);}) 
  }
  

}
