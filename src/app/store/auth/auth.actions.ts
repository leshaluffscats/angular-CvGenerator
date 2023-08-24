import { createAction, props } from '@ngrx/store';
import { IAuthCredentials } from 'src/app/shared/interfaces/api.interface';
import { IAuthError } from './auth.reducer';

export const refreshToken = createAction('[Auth] Refresh token');

export const getAccessToken = createAction(
  '[Auth] Get access token',
  props<{ user: IAuthCredentials }>(),
);
export const getAccessTokenSuccess = createAction(
  '[Auth] Get access token success',
  props<{ accessToken: string }>(),
);
export const getAccessTokenFailure = createAction(
  '[Auth] Get access token failure',
  props<{ error: IAuthError }>(),
);
