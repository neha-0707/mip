import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regArray = {
    username:"",
    password:""
  }
  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.registerUser(this.regArray).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }
}
