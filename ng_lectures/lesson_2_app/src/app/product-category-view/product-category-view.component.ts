import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category-view',
  templateUrl: './product-category-view.component.html',
  styleUrls: ['./product-category-view.component.css']
})
export class ProductCategoryViewComponent implements OnInit {

  currCategory: string = 'clothes';

  constructor() { }

  ngOnInit(): void {
  }

  viewCategory(val: string): void {
    this.currCategory = val;
  }
}
