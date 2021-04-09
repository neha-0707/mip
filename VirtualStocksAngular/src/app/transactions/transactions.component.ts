import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
transactions=[];
  constructor(private service: SharedService) { }

  
  getTransactions(){
    this.service.getTransactions().subscribe(res=>{
    this.transactions=res;
    console.log(this.transactions);
  },
  err=>{console.log(err);
  })  
}
ngOnInit(): void {
  
  this.getTransactions();
  
}
}
