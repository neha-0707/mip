import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errMsg="";
  regArray = {
      "username": "",
      "password":"",
      "ConfPassword":""
    };
  constructor(private service: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
    console.log(this.regArray);

    this.service.registerUser(this.regArray).subscribe(
      res=>{
        console.log(res);
        //localStorage.setItem('token',res.token);
        this.router.navigate(['/aboutus']);
      },
      err=>{
        console.log("hello");
        console.log(err);
        this.errMsg = err;
      }
    )
  }
}
