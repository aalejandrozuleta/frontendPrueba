import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarShopComponent } from './card-car-shop.component';

describe('CardCarShopComponent', () => {
  let component: CardCarShopComponent;
  let fixture: ComponentFixture<CardCarShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCarShopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCarShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
