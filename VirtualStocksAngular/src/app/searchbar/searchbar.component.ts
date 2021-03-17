import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SendstockService } from '../sendstock.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  bseStocks: string[];
  bStock:any;
  bseStocksTemp: string[];
  constructor(private service:SendstockService,   private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit(): void {
    this.bseStocks=  ['Apple','AAAjjfjs','AAAA' ,'Orange', 'Banana'];
    this.bseStocksTemp=  ['Apple','AAAjjfjs','AAAA' ,'Orange', 'Banana'];
  }
  Search()
  {
    if(this.bStock == "")
    {
      this.ngOnInit();
    }
    else
    {
      this.bseStocksTemp=this.bseStocks.filter(res=>{
        return res.toLocaleLowerCase().match(this.bStock.toLocaleLowerCase());
      })
    }

  }
  onClick(s:string)
  {
   console.log(s);
    //this.service.stockname(s).subscribe(data=>{
      //alert(data.toString());
   // })
   const stockname = s ? s : null;
   // Pass along the hero id if available
   // so that the HeroList component can select that item.
   this.router.navigate(['/stockdetail', { name: stockname }]);
  }
  

}
