import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-portfolio',
  styleUrls: ['./portfolio.component.scss'],
  templateUrl: './portfolio.component.html', 
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PortfolioComponent implements OnInit {
  Response={};
  initial:any;
  curr:any;
  stocks:any;
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['symbol', 'change', 'number'];
  expandedElement: PeriodicElement | null;
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getPortfolio();
  }
  getPortfolio(){
    this.service.getPortfolio().subscribe(res=>{
      console.log(res);
      this.Response = res;
      this.splitData();
    },
    err=>{console.log(err);
    })  
  }
  splitData(){
    this.initial= (this.Response as any).UnrealizedValueInitial;
    this.curr=(this.Response as any).UnrealizedValueCurr;
    this.stocks=(this.Response as any).stocks;
    /*for(var i in this.stocks){
      ELEMENT_DATA[i].averagePrice=(this.stocks[i] as any).stock.averagePrice;
      ELEMENT_DATA[i].high=(this.stocks[i] as any).stock.high;
      ELEMENT_DATA[i].low=(this.stocks[i] as any).stock.low;
      ELEMENT_DATA[i].previous_close=(this.stocks[i] as any).stock.previous_close;
      ELEMENT_DATA[i].symbol=(this.stocks[i] as any).stock.symbol;
      ELEMENT_DATA[i].change=(this.stocks[i] as any).stock.change;
      ELEMENT_DATA[i].company_name=(this.stocks[i] as any).stock.company_name;
      ELEMENT_DATA[i].number = ((this.stocks[i] as any).number);
    }*/
    for(var i in this.stocks){
      ELEMENT_DATA[i]=this.stocks.stock;
    }
    console.log(this.initial);
    console.log(this.curr);
    console.log(this.stocks);
    console.log(ELEMENT_DATA);
  }
}

export interface PeriodicElement {
  averagePrice: number,
        high: number,
        low: number,
        previous_close: number,
        symbol: string,
        change: string,
        company_name: string,
        number: number
}

const ELEMENT_DATA: PeriodicElement[] = [
  ];
 

  
