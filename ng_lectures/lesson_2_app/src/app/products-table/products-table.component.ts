import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  products: any[] = []

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {

  }

  loadProducts(){
    this.products = this.productsService.getAll();
  }

  addProduct(ref: any ){
    let productTItle = ref.value;
    let newProduct = {
      "id": 20,
      "title": productTItle,
      "price": 12.99,
      "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      "rating": {
        "rate": 3.6,
        "count": 145
      }
    };
    this.products.push(newProduct);
  }

  // trackByFn(index: any, item: any) {
  //
  // }

  trackByTitle(index: any, item: any) {
    return (item) ? item.title: null;
  }
}
