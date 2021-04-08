import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
quantity="";
respone="";
errormsg="";
  constructor(
    @Inject(MAT_DIALOG_DATA) public stockid:any,
    public diaglogRef: MatDialogRef<BuyComponent>,
    private service: SharedService
  ) { }

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
    this.service.buyStock(this.stockid,this.quantity).subscribe(
      res=>{
        this.respone=res;
        console.log(res);

      },
      err=>{console.log(err);
      this.errormsg=err;}
    )

  }

}
