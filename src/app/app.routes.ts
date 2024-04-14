import { Routes } from '@angular/router';
//**pagues */
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SingUpComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirige a 'home' si no se encuentra la ruta
];
