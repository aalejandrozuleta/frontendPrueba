import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '@services/carShop.service';


@Component({
  selector: 'app-card-car-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-car-shop.component.html',
  styleUrl: './card-car-shop.component.scss'
})
export class CardCarShopComponent {
  trashImg = 'assets/icon/trash.svg'

  constructor(private cartService: CartService) {}

  get products(): {img: string, nameProduct: string, price: number, stock: number}[] {
    return this.cartService.products;
  }
}

