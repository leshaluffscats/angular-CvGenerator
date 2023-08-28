// сделать эффект который будет слать http запрос на refresh
// по прилету с сервера токенов установить из либо в куки либо в сторе

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { IJwt } from 'src/app/shared/interfaces/auth-api.interface';
import { AuthApiService } from 'src/app/shared/services/api/auth/auth.api.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import * as authActions from './auth.actions';

@Injectable()
export class AuthEffects {
  getToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.getAccessToken),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mergeMap((user: any) =>
        this.authApi.login(user).pipe(
          tap((tokens: IJwt) => {
            if (tokens.access_token) {
              this.auth.submitAuth();
            }
          }),
          map((tokens: IJwt) =>
            authActions.getAccessTokenSuccess({
              accessToken: tokens.access_token,
            }),
          ),
          catchError(error => of(authActions.getAccessTokenFailure(error))),
        ),
      ),
    ),
  );

  refreshTokens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.refreshToken),
      mergeMap(() =>
        this.authApi.refreshToken().pipe(
          map((tokens: IJwt) =>
            authActions.getAccessTokenSuccess({
              accessToken: tokens.access_token,
            }),
          ),
          catchError(error => of(authActions.getAccessTokenFailure(error))),
        ),
      ),
    ),
  );

  constructor(
    private auth: AuthService,
    private actions$: Actions,
    private authApi: AuthApiService,
  ) {}
}
