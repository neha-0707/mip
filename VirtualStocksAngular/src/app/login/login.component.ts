import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginArray = {
    username:"",
    password:""
  }
  constructor(private service: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.loginUser(this.loginArray).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token',res.token);
        this.router.navigate(['/aboutus']);
      },
      err=>console.log(err)
    )
  }
}
