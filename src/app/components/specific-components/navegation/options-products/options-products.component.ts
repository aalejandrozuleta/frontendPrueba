import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-options-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './options-products.component.html',
  styleUrl: './options-products.component.scss'
})
export class OptionsProductsComponent {
  optionsButton = [
    {
      option: "Ordenadores",
      action: "product#laptops"
    },
    {
      option: "Celulares",
      action: "product#smartphones"
    },
    {
      option: "Impresoras",
      action: "product#printers"
    },
    {
      option: "Accesorios",
      action: "product#accessories"
    },
    {
      option: "Teclados",
      action: "product#keywords"
    },
    {
      option: "Ratones",
      action: "product#mouses"
    }
  ]
}
