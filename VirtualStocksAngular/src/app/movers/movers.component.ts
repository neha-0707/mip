import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-movers',
  templateUrl: './movers.component.html',
  styleUrls: ['./movers.component.scss']
})
export class MoversComponent implements OnInit {
topGainer={};
topLoser={};
  constructor(private service:SharedService) {

   }

  ngOnInit(): void {
    /* this.service.getGainers().subscribe(res=>{
      this.topGainer=res;
      console.log(res);

    },
    err=>{console.log(err);})
    this.service.getLosers().subscribe(res=>{
      this.topLoser=res;
      console.log(res);

    },
    err=>{console.log(err);}) */

}
}