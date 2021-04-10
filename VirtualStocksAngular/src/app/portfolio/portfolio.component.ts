import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SharedService } from '../shared.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-portfolio',
  styleUrls: ['./portfolio.component.scss'],
  templateUrl: './portfolio.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PortfolioComponent implements OnInit {
  b = {
    averagePrice: null,
    high: null,
    low: null,
    previous_close: null,
    symbol: null,
    change: null,
    company_name: null,
    number: null
  };
  Response = {};
  initial: any;
  curr: any;
  stocks: any;
  dataSource: any;
  columnsToDisplay = ['symbol', 'change', 'number'];
  expandedElement: PeriodicElement | null;
  
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getPortfolio();
  }
  getPortfolio() {
    this.service.getPortfolio().subscribe(res => {
      console.log(res);
      this.dataSource=null;
      this.Response = res;
      this.splitData();
      this.dataSource =  ELEMENT_DATA;
    },
      err => {
        console.log(err);
      })
  }
  splitData() {
    ELEMENT_DATA=[];
    this.initial = (this.Response as any).UnrealizedValueInitial;
    this.curr = (this.Response as any).UnrealizedValueCurr;
    this.stocks = (this.Response as any).stocks;


    for (var i in this.stocks) {
      this.b.averagePrice = this.stocks[i]["stock"]["averagePrice"];
      this.b.high = this.stocks[i]["stock"]["high"];
      this.b.low = this.stocks[i]["stock"]["low"];
      this.b.previous_close = this.stocks[i]["stock"]["previous_close"];
      this.b.symbol = this.stocks[i]["stock"]["symbol"];
      this.b.change = this.stocks[i]["stock"]["change"];
      this.b.company_name = this.stocks[i]["stock"]["company_name"];
      this.b.number = this.stocks[i].number;
      ELEMENT_DATA.push(this.b);
      this.b = {
        averagePrice: null,
        high: null,
        low: null,
        previous_close: null,
        symbol: null,
        change: null,
        company_name: null,
        number: null
      };
    }


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

let ELEMENT_DATA: PeriodicElement[] = [
];



