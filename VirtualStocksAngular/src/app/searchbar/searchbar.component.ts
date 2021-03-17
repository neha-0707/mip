import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  bseStocks: string[];
  bStock:any;
  bseStocksTemp: string[];
  p:number=1;
  constructor() { }
  
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
  onClick(s:any)
  {
    console.log(s);
  }
  

}
