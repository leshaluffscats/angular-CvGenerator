import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { ICommonInitialState } from './common.reducer';

export const selectCommonState = (state: AppState) => state.common;

export const selectTheme = createSelector(
  selectCommonState,
  (state: ICommonInitialState) => state.isDark,
);

export const selectBreadCrumbs = createSelector(
  selectCommonState,
  (state: ICommonInitialState) => state.breadcrumbs,
);
