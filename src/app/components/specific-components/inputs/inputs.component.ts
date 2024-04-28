import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FORM_CONFIG } from 'src/app/shared/config/form-config';


@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  formInputs = FORM_CONFIG.signUp;
}
