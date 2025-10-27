import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
 private window: Window & typeof globalThis;

  constructor() {
    this.window = window as (Window & typeof globalThis);
  }

  getLocalStorage(): Storage {
    return this.window.localStorage;
  }

  getSessionStorage(): Storage {
    return this.window.sessionStorage;
  }

  getLocation(): Location {
    return this.window.location;
  }
}
