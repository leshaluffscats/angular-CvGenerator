import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAccessToken, refreshToken } from './auth.actions';
import { IAuthCredentials } from 'src/app/shared/interfaces/auth-api.interface';
import { selectAccessToken, selectAuth } from './auth.selector';
import { AppState } from '..';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  public readonly token$ = this.store.select(selectAccessToken);
  public readonly tokenData$ = this.store.select(selectAuth);

  constructor(private store: Store<AppState>) {}

  public refreshToken(): void {
    this.store.dispatch(refreshToken());
  }

  public getAccessToken(user: IAuthCredentials): void {
    this.store.dispatch(getAccessToken({ user }));
  }
}
