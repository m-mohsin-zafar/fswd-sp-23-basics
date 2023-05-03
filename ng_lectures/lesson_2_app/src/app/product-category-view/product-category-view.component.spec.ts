import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryViewComponent } from './product-category-view.component';

describe('ProductCategoryViewComponent', () => {
  let component: ProductCategoryViewComponent;
  let fixture: ComponentFixture<ProductCategoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
