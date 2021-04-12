import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-gainers',
  templateUrl: './gainers.component.html',
  styleUrls: ['./gainers.component.scss']
})
export class GainersComponent implements OnInit {
topGainer:any;
  constructor(private service:SharedService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getGainers();
  }
  getGainers()
  {
    this.service.getGainers().subscribe(res=>{
      this.topGainer=res;
  
    },
    err=>{console.log(err);})
  }

  onClick(s:string)
{
  const stockname = s ? s : null;
   this.router.navigate(['/stockdetail', { name: stockname }]);
}

}
