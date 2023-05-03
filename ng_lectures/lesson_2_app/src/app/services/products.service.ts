import { Injectable } from '@angular/core';
// import {PRODUCTS} from "./data";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Define root url
  private rootUrl = 'https://fakestoreapi.com/products';

  // private products: any[] = PRODUCTS;
  constructor(private httpClient: HttpClient) { }


  // We want to implement CRUD operations

  // Read All
  getAll(){
    return this.httpClient.get(this.rootUrl, {observe: 'response'});
  }

  // Read One
  getOne(id: number){
    return this.httpClient.get(`${this.rootUrl}/${id}`);
  }

  // Delete
  delete(id: number){
    return this.httpClient.delete(`${this.rootUrl}/${id}`);
  }
}
