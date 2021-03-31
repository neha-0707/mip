import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
quantity="";
  constructor(
    @Inject(MAT_DIALOG_DATA) public stockname:any,
    public diaglogRef: MatDialogRef<BuyComponent>
  ) { }

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
