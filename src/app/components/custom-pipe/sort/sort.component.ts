import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  arrNumber: number[] = [1, 5, 9, 4, 2, 8, 3]
  sortValue: number = 1;
  onHandleSort(value:number):void {    
    this.sortValue = value
  }

  name: string = '';
}
