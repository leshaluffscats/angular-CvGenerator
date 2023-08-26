import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAccessToken, refreshToken } from './auth.actions';
import { IAuthCredentials } from 'src/app/shared/interfaces/api.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  constructor(private store: Store) {}

  public refreshToken(): void {
    this.store.dispatch(refreshToken());
  }

  public getAccessToken(user: IAuthCredentials): void {
    this.store.dispatch(getAccessToken({ user }));
  }
}
