import { createReducer, on } from '@ngrx/store';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import * as cvsActions from './cvs.actions';

export interface ICvsInitialState {
  cvs: ICv[];
}

export const cvsInitialState: ICvsInitialState = {
  cvs: [],
};

export const cvsReducer = createReducer(
  cvsInitialState,
  on(cvsActions.addToCvs, (state, { cv }) => ({
    ...state,
    cvs: [...state.cvs, cv],
  })),
);
