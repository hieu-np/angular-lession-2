import { Injectable } from '@angular/core';
import { Product } from '../models/product.class';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: 1,
      name: 'Apple',
      price: 8000,
      status: true
    },
    {
      id: 2,
      name: 'Nokia',
      price: 4000,
      status: false
    },
    {
      id: 3,
      name: 'Sony',
      price: 9000,
      status: true
    }
  ];

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  gerProductById(id: number){
    let res;
    for( let i = 0; i < this.products.length; i++){
      if(this.products[i].id == id){
        res = this.products[i];
        break;
      }
    }
    return res;
  }
}
