import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private _isMenuVisible = false;
  isMenuVisible$ = new BehaviorSubject<boolean>(this._isMenuVisible);

  openMenu(): void {
    this._isMenuVisible = true;
    this.isMenuVisible$.next(this._isMenuVisible);
  }

  closeMenu(): void {
    this._isMenuVisible = false;
    this.isMenuVisible$.next(this._isMenuVisible);
  }
}

