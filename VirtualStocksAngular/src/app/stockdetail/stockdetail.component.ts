import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BuyComponent } from '../buy/buy.component';
import { SendstockService } from '../sendstock.service';

@Component({
  selector: 'app-stockdetail',
  templateUrl: './stockdetail.component.html',
  styleUrls: ['./stockdetail.component.scss']
})
export class StockdetailComponent implements OnInit {
StockName:string;
  constructor(private route: ActivatedRoute,private service: SendstockService,private dialog: MatDialog) { }
StockDetails:any;
  ngOnInit(): void {
    this.StockName=this.route.snapshot.paramMap.get('name');
      this.service.stockname(this.StockName).subscribe(data=>{
      alert(data.toString());

    });
    this.getStockDetails();
  }
  getStockDetails(){
    this.service.stockname(this.StockName).subscribe(data=>{
      this.StockDetails = data;
      console.log(this.StockDetails);
    });
  }
  buystock()
  {
    //https://stackoverflow.com/questions/42664974/how-to-pass-data-to-dialog-of-angular-material-2
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    dialogConfig.data=this.StockName;
    this.dialog.open(BuyComponent,dialogConfig);
  }
}
