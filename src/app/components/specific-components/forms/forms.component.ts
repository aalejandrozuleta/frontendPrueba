import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputsComponent } from '@specificComponent/inputs/inputs.component';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule,CommonModule,InputsComponent],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  @Input() formImage: string = '';
  @Input() formTitle: string = '';
  @Input() optionMenu: string = ''
}
