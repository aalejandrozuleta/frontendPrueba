import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartShopComponent } from '../cart-shop/cart-shop.component';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,HamburgerMenuComponent,CartShopComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  

  optionsMenu = [
    {
      title: 'Inicio',
      img:'assets/icon/home.svg',
      url: '/home'
    },
    {
      title: 'productos',
      img:'assets/icon/product.svg',
      url: '/products'
    },
    {
      title: 'Favoritos',
      img:'assets/icon/heat.svg',
      url: '/favorite'
    },
  ]; 
}
