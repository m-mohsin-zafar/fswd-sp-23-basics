import { Injectable } from '@angular/core';
import {PRODUCTS} from "./data";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: any[] = PRODUCTS;
  constructor() { }

  getAll(){
    return this.products;
  }

}
