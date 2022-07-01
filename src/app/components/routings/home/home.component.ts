import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public error: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onAccess(key: string) {
    if(key == '1234'){
      sessionStorage.removeItem('key')
      sessionStorage.setItem('key', key)
    }else{
      this.error = -1;
    }
  }

}
