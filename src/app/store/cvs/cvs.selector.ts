import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { ICvsInitialState } from './cvs.reducer';

export const selectCvs = (state: AppState) => state.cvs;

export const selectNewCvs = createSelector(
  selectCvs,
  (state: ICvsInitialState) => state.newCvs,
);
