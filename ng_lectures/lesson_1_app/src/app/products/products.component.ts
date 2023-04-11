import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  constructor(
    productsService: ProductsService
  ) { 
    // this.prodService = new ProductService();
    // this.products = this.prodService.getAll();
    this.products = productsService.getAll();
  }

  ngOnInit(): void {
    console.log(this.products);
  }

  addToCart(product: any): void {
    console.log(product);
  }
}
