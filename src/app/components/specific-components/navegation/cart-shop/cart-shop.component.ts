import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderCarShopComponent } from '../../carShop/header-carshop/header-carshop.component';
import { FooterCarShopComponent } from '../../carShop/footer-car-shop/footer-car-shop.component';
import { CardCarShopComponent } from '../../carShop/card-car-shop/card-car-shop.component';
import { CartService } from '@services/carShop.service';

@Component({
  selector: 'app-cart-shop',
  standalone: true,
  imports: [
    CommonModule,
    HeaderCarShopComponent,
    FooterCarShopComponent,
    CardCarShopComponent,
  ],
  templateUrl: './cart-shop.component.html',
  styleUrl: './cart-shop.component.scss',
})
export class CartShopComponent {
  carShopImg = 'assets/icon/carShop.svg';
  constructor(public cartService: CartService) {}
  
}
