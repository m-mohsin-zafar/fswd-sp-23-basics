import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {

  @Input() product: any = {};
  @Output() add: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product: any): void {
    console.log(product);
    this.add.emit(product);
  }

}
