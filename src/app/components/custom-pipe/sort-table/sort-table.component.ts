import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.css']
})
export class SortTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: any[] = [
    {
      id: 1,
      name: 'Apple iPhone 12 Proplus',
      price: 1200
    },
    {
      id: 11,
      name: 'Apple iPhone 13 Proplus',
      price: 1000
    },
    {
      id: 2,
      name: 'Samsung Galaxy S22 Plus',
      price: 2000
    },
    {
      id: 22,
      name: 'Samsung Galaxy Z Fold 3',
      price: 4000
    },
    {
      id: 222,
      name: 'Samsung Galaxy Z Flip 3',
      price: 3000
    },
    {
      id: 3,
      name: 'Nokia 6.1 Plus',
      price: 1300
    },
    {
      id: 33,
      name: 'Nokia 9',
      price: 2500
    }
  ];

  sortBy: string = 'name'; //price
  sortValue: number = 1; // 1 tăng -1 giảm
  onSort(col:any) {
    this.sortBy = col;
    this.sortValue = -this.sortValue;
  }

}
