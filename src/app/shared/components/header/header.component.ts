import { Component } from '@angular/core';
import { NavbarOptionsComponent } from '@specificComponent/navegation/navbar-options/navbar-options.component';
import { NavbarComponent } from '@specificComponent/navegation/navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarOptionsComponent, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
