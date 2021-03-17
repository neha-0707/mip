import { Component, OnInit } from '@angular/core';
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
  constructor(private service:SendstockService) { }
  
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
    this.service.stockname(s).subscribe(data=>{
      alert(data.toString());
    })
  }
  

}
