import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '@services/user.service';
import { InputsComponent } from '@specificComponent/inputs/inputs.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, CommonModule, InputsComponent],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  @Input() formImage: string = '';
  @Input() formTitle: string = '';
  @Input() optionMenu: string = '';

  @ViewChild(InputsComponent) inputsComponent!: InputsComponent;

  constructor(private userService: UserService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.registerUser(this.inputsComponent.formModel).subscribe({
        next: (response) => {
          console.log('Usuario registrado', response);
        },
        error: (error) => {
          console.error('Error al registrar el usuario', error);
        },
      });
    }
  }
}
