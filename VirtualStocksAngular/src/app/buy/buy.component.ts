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
respone:any;
errormsg:any;
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
    this.service.buyStock(this.stockid,this.quantity).subscribe(
      res=>{
        this.respone=res;


      },
      err=>{
      this.errormsg=err;}
    )

  }

}
