import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
wlist:any;
errormsg:any;
deletewlist:any;
  constructor(private service:WishlistService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
this.getwishlist();
  }
getwishlist()
{
  this.service.getwishList().subscribe(data=>{
    this.wlist=data;
    console.log(data);
  },
  err=>{console.log(err);
    this.errormsg=err;
  })
}
onClick(s:string)
{
console.log(s);
this.service.deletefromwishlist(s).subscribe(res=>{
  console.log(res);
  this.deletewlist=res;
  this.getwishlist();
},
err=>{console.log(err);
  this.errormsg=err;
})
}

}
