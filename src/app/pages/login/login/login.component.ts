import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router : Router ){}
 async login(){
  let loginResult = await this.loginService.Loginwithgoogle();
  if(loginResult == null){
    console.log("login fail")
  }else{
    console.log("login sucess")
    this.router.navigate(['./chat'])
  }
  console.log("he")
}
}
