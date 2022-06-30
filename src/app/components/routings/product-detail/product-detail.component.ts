import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.class';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product: any = {};
  public subscription!: Subscription;
  constructor(
    public activatedRoute: ActivatedRoute,
    public productService: ProductService,
    
  ) { }

  ngOnDestroy(): void {
      if(this.subscription){
        this.subscription.unsubscribe();
      }
  }

  ngOnInit(): void {
    
    // this.handleParamsRouteBySnapshot();
    this.handleParams();
    
    
  }
  
  handleParamsRouteBySnapshot() {
    let id = (+this.activatedRoute.snapshot.params['id'])
    this.product = this.productService.gerProductById(id);
  }
  
  handleParams() {
    this.subscription = this.activatedRoute.params.subscribe(data => {
      let id = data['id'];
      this.product = this.productService.gerProductById(id);
      
    })
  }
  

}
