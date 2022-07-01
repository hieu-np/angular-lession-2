import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(
    public router: Router,
  ) {
    
  }

  onLogout() {
    if(localStorage.getItem('user')){
      localStorage.removeItem('user');
      this.router.navigate(['login'])      
    }else{
      this.router.navigate(['login']) 
    }
  }
  
}
