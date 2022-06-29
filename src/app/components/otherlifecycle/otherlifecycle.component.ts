import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-otherlifecycle',
  templateUrl: './otherlifecycle.component.html',
  styleUrls: ['./otherlifecycle.component.css'],
})
export class OtherlifecycleComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log('productsAfterInit', this.productsAfter);
    
    
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    console.log('productsAfterChecked', this.productsAfter);
    
  }

  @ViewChild('ulproducts') productsAfter: any;
  content: string = 'ngContent';
  title: string = 'ngAfterView, ngAfterViewChecked'
  products: any[] = [
    {
      id: 1,
      name: 'iPhone'
    },
    {
      id: 2,
      name: 'Samsung'
    },
    {
      id: 3,
      name: 'Nokia'
    },
    {
      id: 4,
      name: 'Sony'
    }
  ];

  onClick(value: any) {
    this.content = value;
  }

  addProduct(value: any){
    this.products.push({
      id: Math.floor(Math.random() * 1000),
      name: value
    })
  }
}
