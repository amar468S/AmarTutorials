import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAndBeverageComponent } from './food-and-beverage.component';

describe('FoodBeverageComponent', () => {
  let component: FoodBeverageComponent;
  let fixture: ComponentFixture<FoodBeverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAndBeverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAndBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
