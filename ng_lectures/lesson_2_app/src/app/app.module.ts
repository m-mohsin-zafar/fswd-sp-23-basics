import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DetailsCardComponent} from './details-card/details-card.component';
import {ProductsTableComponent} from './products-table/products-table.component';
import {ProductCategoryViewComponent} from './product-category-view/product-category-view.component';
import {FypFormComponent} from './fyp-form/fyp-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginFormComponent} from './login-form/login-form.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleProductViewComponent } from './single-product-view/single-product-view.component';
// import { TestModalComponent } from './modals/test-modal/test-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsCardComponent,
    ProductsTableComponent,
    ProductCategoryViewComponent,
    FypFormComponent,
    LoginFormComponent,
    SingleProductViewComponent,
    // TestModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
