import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsComponent } from '@specificComponent/forms/forms.component';
@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [FormsComponent,HttpClientModule],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.scss'
})
export class SingUpComponent {
  formImage:string = '../../../assets/img/sign-up-form.svg';
  formTitle:string = 'Regístrate con nosotros';
  optionMenu:string = 'Registrarse';  
}
