import { createReducer, on } from '@ngrx/store';
import * as authActions from './auth.actions';
import { parseJwt } from 'src/app/shared/utils/parse-jwt';

export interface IAuthError {
  message: string;
  error: string;
  statusCode: number;
}

export interface IAuthInitialState {
  accessToken: string;
  expires: number;
  isLoading: boolean;
  error: IAuthError | null;
}

export const authInitialState: IAuthInitialState = {
  accessToken: '',
  expires: 0,
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
);
