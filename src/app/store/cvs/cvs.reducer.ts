import { createReducer, on } from '@ngrx/store';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import * as cvsActions from './cvs.actions';

export interface ICvsInitialState {
  newCvs: ICv[];
  existingCVs: ICv[];
}

export const cvsInitialState: ICvsInitialState = {
  newCvs: [],
  existingCVs: [],
};

export const cvsReducer = createReducer(
  cvsInitialState,
  on(cvsActions.addToNewCvs, (state, { cv }) => ({
    ...state,
    newCvs: [...state.newCvs, cv],
  })),
);
