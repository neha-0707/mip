import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
urlgraph:any;
errmsg:any;
  constructor(private service:SharedService) {}

  ngOnInit(): void {
this.getGraph();
  }
  getGraph()
  {
    this.service.getGraph().subscribe(res=>{
      this.urlgraph=res;
    console.log(res);
    },
    err=>{
      this.errmsg=err;
      this.urlgraph=err["error"]["text"];
      console.log(err["error"]["text"]);}) 
  }

}
