import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SendstockService } from '../sendstock.service';

@Component({
  selector: 'app-stockdetail',
  templateUrl: './stockdetail.component.html',
  styleUrls: ['./stockdetail.component.scss']
})
export class StockdetailComponent implements OnInit {
StockName:string;
  constructor(private route: ActivatedRoute,private service: SendstockService) { }

  ngOnInit(): void {
    this.StockName=this.route.snapshot.paramMap.get('name');
      this.service.stockname(this.StockName).subscribe(data=>{
      alert(data.toString());
    })
  }

}
