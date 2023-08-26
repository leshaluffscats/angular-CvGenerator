import { createSelector } from '@ngrx/store';
import { IAuthInitialState } from './auth.reducer';
import { AppState } from '..';

export const selectAuth = (state: AppState) => state.auth;

export const selectAccessToken = createSelector(
  selectAuth,
  (state: IAuthInitialState) => state.accessToken,
);
