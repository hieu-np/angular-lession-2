import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  content: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry";
  name:string='lương định của';
  title: string = 'Học Angular 13';
  amount: number = 35.142567;
  result : number = 0.8516

}
