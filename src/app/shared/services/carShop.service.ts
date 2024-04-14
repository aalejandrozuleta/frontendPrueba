// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // --------------------------------------------------------------
  private _isCartVisible = false; // El carrito de compras está cerrado por defecto
  private _products: {img: string, nameProduct: string, price: number, stock: number}[] = [];

  get isCartVisible(): boolean {
    return this._isCartVisible;
  }

  set isCartVisible(value: boolean) {
    this._isCartVisible = value;
  }

  openCart(): void {
    this._isCartVisible = true; // Abre el carrito de compras
  }

  toggleCartVisibility(): void {
    this._isCartVisible = !this._isCartVisible;
  }
  // ----------------------------------------------------------------

  // ----------------------------------------------------------------
  get products(): {img: string, nameProduct: string, price: number, stock: number}[] {
    return this._products;
  }

  set products(value: {img: string, nameProduct: string, price: number, stock: number}[]) {
    this._products = value;
  }
  // ----------------------------------------------------------------

  clearCart(): void {
    this._products = [];
  }
}