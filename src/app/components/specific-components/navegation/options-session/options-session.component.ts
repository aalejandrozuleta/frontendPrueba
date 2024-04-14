import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-options-session',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './options-session.component.html',
  styleUrl: './options-session.component.scss'
})
export class OptionsSessionComponent {
  optionsSession = [
    {
      title: 'Acceder',
      url: 'login'
    },
    {
      title: 'Registrarse',
      url:'signup'
    }
  ];
}
