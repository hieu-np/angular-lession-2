import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otherlifecyclechildthree',
  templateUrl: './otherlifecyclechildthree.component.html',
  styleUrls: ['./otherlifecyclechildthree.component.css']
})
export class OtherlifecyclechildthreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title: string = 'ngAfterView, ngAfterViewChecked'

}
