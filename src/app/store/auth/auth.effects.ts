// сделать эффект который будет слать http запрос на refresh
// по прилету с сервера токенов установить из либо в куки либо в сторе

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from './auth.actions';
import { catchError, mergeMap, map, of } from 'rxjs';
import { AuthApiService } from 'src/app/shared/services/api/auth/auth.api.service';
import {
  IJwt,
  // IAuthCredentials,
} from 'src/app/shared/interfaces/api.interface';

@Injectable()
export class authEffects {
  getToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.getAccessToken),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mergeMap((user: any) =>
        this.authApi.login(user).pipe(
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
    private actions$: Actions,
    private authApi: AuthApiService,
  ) {}
}
