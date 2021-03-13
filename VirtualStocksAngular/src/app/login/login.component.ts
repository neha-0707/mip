import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginArray);
  }
}
