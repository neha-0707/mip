import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-movers',
  templateUrl: './movers.component.html',
  styleUrls: ['./movers.component.scss']
})
export class MoversComponent implements OnInit {
topGainer:any;
topLoser:any;
  constructor(private service:SharedService,
    private router:Router,
    private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    /* */
    this.getmovers();
}


getmovers()
{
 
  this.service.getLosers().subscribe(res=>{
    this.topLoser=res;
    console.log(res);

  },
  err=>{console.log(err);}) 
}
onClick(s:string)
{
  console.log(s);
  const stockname = s ? s : null;
   this.router.navigate(['/stockdetail', { name: stockname }]);
}
}