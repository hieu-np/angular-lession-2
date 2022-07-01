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

  getAllProducts(name?: string, price?:number){    
    let result: Product[] = this.products;
    if(name){
      result = this.products.filter(x => {
        return x.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
      });
    }
    if(price){
      result = this.products.filter(x => {
        return x.price == price;
      });
    }
    return result;
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
