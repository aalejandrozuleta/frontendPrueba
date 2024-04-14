import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCarShopComponent } from './footer-car-shop.component';

describe('FooterCarShopComponent', () => {
  let component: FooterCarShopComponent;
  let fixture: ComponentFixture<FooterCarShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCarShopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterCarShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
