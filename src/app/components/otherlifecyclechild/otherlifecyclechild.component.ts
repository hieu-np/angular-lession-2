import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otherlifecyclechild',
  templateUrl: './otherlifecyclechild.component.html',
  styleUrls: ['./otherlifecyclechild.component.css']
})
export class OtherlifecyclechildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = 'ng-content';
  

}
