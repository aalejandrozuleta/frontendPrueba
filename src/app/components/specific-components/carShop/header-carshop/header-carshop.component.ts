import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '@services/carShop.service';

@Component({
  selector: 'app-header-carShop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-carshop.component.html',
  styleUrl: './header-carshop.component.scss'
})

export class HeaderCarShopComponent {
  constructor(private cartService: CartService) {}
  imgOptions = [
    {
      img: 'assets/icon/trash.svg',
      action: () => this.clearCarShop()
    },
    {
      img: 'assets/icon/buyCarShop.svg',
      action: () => this.buyCarShop()
    },
    {
      img: 'assets/icon/x.svg',
      action: () => this.closeCarShop()
    }
  ];  

  clearCarShop() {
    this.cartService.clearCart();
  }

  buyCarShop() {
    // Aquí va la lógica para comprar los productos en el carrito
  }

  closeCarShop() {
    this.cartService.isCartVisible = false;
  }
}

