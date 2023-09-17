import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { ICvsInitialState } from './cvs.reducer';

export const selectCvsState = (state: AppState) => state.cvs;

export const selectCvs = createSelector(
  selectCvsState,
  (state: ICvsInitialState) => state.cvs,
);
