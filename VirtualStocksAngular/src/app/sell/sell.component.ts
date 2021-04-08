import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuyComponent } from '../buy/buy.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
quantity="";
respone="";
errormsg="";
  constructor(@Inject(MAT_DIALOG_DATA) public stockid:any,
  public diaglogRef: MatDialogRef<BuyComponent>,
  public service:SharedService) { }

  ngOnInit(): void {
  }
  closeDialog()
  {
this.diaglogRef.close();
  }
  onSubmit()
  {
    this.errormsg="";
    this.respone="";
    console.log(this.quantity);
    this.service.sellStock(this.stockid,this.quantity).subscribe(
      res=>{
        this.respone=res;
        console.log(res);

      },
      err=>{console.log(err);
        this.errormsg=err;
      }
    )
  }
}
