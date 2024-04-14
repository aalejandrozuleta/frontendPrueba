import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-options-filter',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './options-filter.component.html',
  styleUrl: './options-filter.component.scss',
})
export class OptionsFilterComponent {
  optionsFilter = [
    {
      title: 'Calificación',
      options: ['Todos','Normal', 'Buena', 'Excelente'],
      selectedOption: 0,
    },
    {
      title: 'Precio',
      options: ['Todos','0 - 10.000', '20.000', '30.000', '40.000','50.000','60.000','70.000','80.000','90.000','> 100.000'],
      selectedOption: 0,
    },
  ];

  updateRangeValue(index: number) {
    const rangeElement = document.getElementById('range' + index) as HTMLInputElement;
    const rangeValueElement = document.getElementById('rangeValue' + index);
    if (rangeElement && rangeValueElement) {
      rangeValueElement.innerText = this.optionsFilter[index].options[Number(rangeElement.value)];
    }
  }
}
