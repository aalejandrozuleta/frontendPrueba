import { registerUserDto } from './../../../shared/interface/userRegister';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FORM_CONFIG } from 'src/app/shared/config/form-config';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent {

  formInputs = FORM_CONFIG.signUp;

  formModel: any = {
    name_user: '',
    lastName_user: '',
    country_user: '',
    phone_user: '',
    email_user: '',
    password_user: '',
    user_type: '',
  };
}
