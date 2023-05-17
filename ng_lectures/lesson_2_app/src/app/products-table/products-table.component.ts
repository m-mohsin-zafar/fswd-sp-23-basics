import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  products: any[] = []

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  loadProducts(){
    this.productsService.getAll().subscribe((response: any) => {
      this.products = response.body;
    });
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

  viewProduct(productId: number){
    // this.productsService.getOne(productId as number).subscribe((response: any) => {
    //   console.log(response);
    // });
    // Navigate to single product view
    this.router.navigate(['product-listings', productId]);
  }

  deleteProduct(product: any){
    let index = this.products.indexOf(product);
    // this.products.splice(index, 1);
    this.productsService.delete(product.id).subscribe((response: any) => {
      console.log(response);
      this.products.splice(index, 1);
    });
  }

  editProduct(product: any){

  }

  trackByTitle(index: any, item: any) {
    return (item) ? item.title: null;
  }
}
