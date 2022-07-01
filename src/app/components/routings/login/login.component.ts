import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public error: number = 0;

  constructor(
    public routerService: Router,
  ) { }

  ngOnInit(): void {
    this.checkLogin();
  }
  checkLogin(){
    if(localStorage.getItem('user')){
      this.routerService.navigate([''])
    }
  }

  onLogin(username: string, passsword: string) {
    let user = {
      username : username,

      passsword : passsword
    }
    if(username == 'admin' && passsword == 'admin')
    {
      localStorage.setItem('user', JSON.stringify(user))
      this.routerService.navigate(['homerouting'])
    }else{
      this.error = -1;
    }
  }

}
