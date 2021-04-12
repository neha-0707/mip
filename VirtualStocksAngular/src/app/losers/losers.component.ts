import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-losers',
  templateUrl: './losers.component.html',
  styleUrls: ['./losers.component.scss']
})
export class LosersComponent implements OnInit {
topLoser:any;
  constructor(private service:SharedService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getmovers();
  }
  getmovers()
  {
   
    this.service.getLosers().subscribe(res=>{
      this.topLoser=res;
      
  
    },
    err=>{console.log(err);}) 
  }
  onClick(s:string)
  {
  
    const stockname = s ? s : null;
     this.router.navigate(['/stockdetail', { name: stockname }]);
  }
}
