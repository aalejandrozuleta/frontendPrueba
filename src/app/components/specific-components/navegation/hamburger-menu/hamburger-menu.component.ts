import { Component } from '@angular/core';
import { MenuService } from '@services/menu.service';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss'
})
export class HamburgerMenuComponent {
  constructor(public menuService: MenuService) {}
  hamburgerImg = 'assets/icon/hamburger.svg';
}
