import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  templateUrl: './ng-on-init.component.html',
  styleUrls: ['./ng-on-init.component.css']
})
export class NgOnInitComponent implements OnInit {

  constructor() {
    console.log('Contructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    
  }
  total: number = 0;
  a!: number;
  b!: number;

  isShowing : boolean = true;

  onToggle() :void {
    this.isShowing = ! this.isShowing
  }

  amount() {
    this.total = this.a + this.b
    console.log(this.total);
  }
}
