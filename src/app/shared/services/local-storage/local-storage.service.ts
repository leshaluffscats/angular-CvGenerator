import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public setItem(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string): unknown {
    if (key in localStorage) {
      return JSON.parse(localStorage.getItem(key));
    }
    return undefined;
  }
}
