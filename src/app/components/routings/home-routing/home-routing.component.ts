import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.class';


@Component({
  selector: 'app-home-routing',
  templateUrl: './home-routing.component.html',
  styleUrls: ['./home-routing.component.css']
})
export class HomeRoutingComponent implements OnInit {

  products: Product[] = [];

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  title: string = 'Product List'

}
