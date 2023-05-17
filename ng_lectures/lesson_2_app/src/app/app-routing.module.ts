import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsTableComponent} from "./products-table/products-table.component";
import {SingleProductViewComponent} from "./single-product-view/single-product-view.component";


// 1. LANDING PAGE SHOULD BE PRODUCT TABLE COMPONENT
const routes: Routes = [
  {path: '', redirectTo: 'product-listings', pathMatch: 'full'},
  {path: 'product-listings', component: ProductsTableComponent},
  {path: 'product-listings/:product-id', component: SingleProductViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
