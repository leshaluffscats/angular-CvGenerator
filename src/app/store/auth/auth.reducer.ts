import { createReducer, on } from '@ngrx/store';
import * as authActions from './auth.actions';
import { parseJwt } from 'src/app/shared/utils/parse-jwt';
import { IError } from 'src/app/shared/interfaces/error.interface';

export interface IAuthInitialState {
  accessToken: string;
  expires: number;
  isLoading: boolean;
  error: IError;
}

export const authInitialState: IAuthInitialState = {
  accessToken: null,
  expires: null,
  isLoading: false,
  error: null,
};

export const authReducer = createReducer(
  authInitialState,
  on(authActions.getAccessToken, state => ({
    ...state,
    isLoading: true,
  })),
  on(authActions.getAccessTokenSuccess, (state, { accessToken }) => ({
    ...state,
    accessToken: accessToken,
    expires: parseJwt(accessToken).expires,
    isLoading: false,
    error: null,
  })),
  on(authActions.getAccessTokenFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),

  on(authActions.refreshToken, state => ({
    ...state,
    isLoading: true,
  })),
  on(authActions.refreshTokenSuccess, (state, { accessToken }) => ({
    ...state,
    isLoading: false,
    error: null,
    expires: parseJwt(accessToken).expires,
    accessToken: accessToken,
  })),
  on(authActions.refreshTokenFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
  on(authActions.removeToken, state => ({
    ...state,
    accessToken: null,
    expires: null,
    isLoading: false,
    error: null,
  })),
);
