import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuyComponent } from '../buy/buy.component';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
quantity="";
  constructor(@Inject(MAT_DIALOG_DATA) public stockname:any,
  public diaglogRef: MatDialogRef<BuyComponent>) { }

  ngOnInit(): void {
  }
  closeDialog()
  {
this.diaglogRef.close();
  }
  onSubmit()
  {
    console.log(this.quantity);
  }
}
