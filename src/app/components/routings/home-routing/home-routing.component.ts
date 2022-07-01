import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.class';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home-routing',
  templateUrl: './home-routing.component.html',
  styleUrls: ['./home-routing.component.css']
})
export class HomeRoutingComponent implements OnInit, OnDestroy {
  name: string = '';
  price!: number;
  products: Product[] = [];
  public paramsSubscription!: Subscription;
  constructor(
    public productService: ProductService,
    public routerService: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.queryParams.subscribe(data => {
      let name = data['name'];
      let price = data['price'];
      this.name = name;
      this.price = price
      this.products = this.productService.getAllProducts(name, price);
    })
    
  }
  ngOnDestroy(): void {
      if(this.paramsSubscription){
        this.paramsSubscription.unsubscribe();
      }
  }

  title: string = 'Product List'

  onSearch(){
    this.routerService.navigate(['/homerouting'], 
    {queryParams :{name: this.name ? this.name : '', price: this.price ? this.price : ''}})
  }

}
