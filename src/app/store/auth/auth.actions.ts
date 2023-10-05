import { createAction, props } from '@ngrx/store';
import { IAuthCredentials } from 'src/app/shared/interfaces/auth-api.interface';
import { IError } from 'src/app/shared/interfaces/error.interface';

// Refresh actions
export const refreshToken = createAction('[Auth] Refresh token');
export const refreshTokenSuccess = createAction(
  '[Auth] Refresh token success',
  props<{ accessToken: string }>(),
);
export const refreshTokenFailure = createAction(
  '[Auth] Refresh token failure',
  props<{ error: IError }>(),
);

// get access token actions
export const getAccessToken = createAction(
  '[Auth] Get access token',
  props<{ authCredentials: IAuthCredentials }>(),
);
export const getAccessTokenSuccess = createAction(
  '[Auth] Get access token success',
  props<{ accessToken: string }>(),
);
export const getAccessTokenFailure = createAction(
  '[Auth] Get access token failure',
  props<{ error: IError }>(),
);

export const removeToken = createAction('[Auth] Remove token');
