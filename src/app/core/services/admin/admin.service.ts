import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private drawerOpened: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private menuOpened: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  public get isDrawerOpened() {
    return this.drawerOpened.asObservable();
  }

  public get isMenuOpened() {
    return this.menuOpened.asObservable();
  }

  public setDrawerOpened(state: boolean) {
    this.drawerOpened.next(state);
  }

  public setMenuOpened(state: boolean) {
    this.menuOpened.next(state);
  }
}
