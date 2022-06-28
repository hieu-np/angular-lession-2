import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  content: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry";
  name:string='lương định của';
  title: string = 'Học Angular 13';
  amount: number = 35.142567;
  result : number = 0.8516
  names :  string[] = ['abc', 'def', 'xyz'];
  total: number = 75.8;
  today: Date = new Date();
  product: any = {
    id: 1,
    name: 'samsung',
    price: 15,
    status: true
  }

}
