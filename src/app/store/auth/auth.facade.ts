import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAuthCredentials } from 'src/app/shared/interfaces/auth-api.interface';
import { AppState } from '..';
import {
  getAccessToken,
  refreshToken,
  refreshTokenSuccess,
} from './auth.actions';
import { selectAccessToken, selectAuth } from './auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  public readonly accessToken$ = this.store.select(selectAccessToken);
  public readonly tokenData$ = this.store.select(selectAuth);

  constructor(private store: Store<AppState>) {}

  public refreshToken(): void {
    this.store.dispatch(refreshToken());
  }

  public getAccessToken(user: IAuthCredentials): void {
    this.store.dispatch(getAccessToken({ user }));
  }

  public updateToken(accessToken: string): void {
    this.store.dispatch(refreshTokenSuccess({ accessToken }));
  }
}
