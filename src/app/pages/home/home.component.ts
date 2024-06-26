import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
