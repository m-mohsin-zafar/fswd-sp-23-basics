import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FypFormComponent } from './fyp-form.component';

describe('FypFormComponent', () => {
  let component: FypFormComponent;
  let fixture: ComponentFixture<FypFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FypFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FypFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
