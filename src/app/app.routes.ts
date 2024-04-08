import { Routes } from '@angular/router';
//**pagues */
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { ForgetPasswordComponent } from './pages/forgetPassword/forgetPassword.component';
import { SingUpComponent } from './pages/singUp/singUp.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'signup', component: SingUpComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirige a 'home' si no se encuentra la ruta
];
