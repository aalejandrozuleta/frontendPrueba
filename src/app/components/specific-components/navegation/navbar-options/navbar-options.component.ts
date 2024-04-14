import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoBarComponent } from '../logo-bar/logo-bar.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { OptionsFilterComponent } from '../options-filter/options-filter.component';
import { OptionsSessionComponent } from '../options-session/options-session.component';
import { OptionsProductsComponent } from '../options-products/options-products.component';
import { MenuService } from '@services/menu.service';

@Component({
  selector: 'app-navbar-options',
  standalone: true,
  imports: [CommonModule,LogoBarComponent,SearchBarComponent,OptionsFilterComponent,OptionsSessionComponent,OptionsProductsComponent],
  templateUrl: './navbar-options.component.html',
  styleUrl: './navbar-options.component.scss'
})
export class NavbarOptionsComponent {
  constructor(public menuService: MenuService) {}

  closeImg = 'assets/icon/x.svg';
}
