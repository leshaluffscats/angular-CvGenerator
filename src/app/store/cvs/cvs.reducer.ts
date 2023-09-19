import { createReducer, on } from '@ngrx/store';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import * as cvsActions from './cvs.actions';

export interface ICvsInitialState {
  cvs: ICv[];
  updatedCvs: ICv[];
  selectedCv: ICv[];
}

export const cvsInitialState: ICvsInitialState = {
  cvs: [],
  updatedCvs: [],
  selectedCv: [],
};

export const cvsReducer = createReducer(
  cvsInitialState,
  on(cvsActions.addToCvs, (state, { cv }) => ({
    ...state,
    cvs: [...state.cvs, cv],
  })),
  on(cvsActions.receiveCvs, (state, { cvs }) => ({
    ...state,
    cvs: cvs,
    updatedCvs: [],
  })),
  on(cvsActions.resetCvs, state => ({
    ...state,
    cvs: [],
    updatedCvs: [],
  })),
  on(cvsActions.updateCv, (state, { cv }) => ({
    ...state,
    updatedCvs: [...state.updatedCvs, cv],
  })),
  on(cvsActions.selectCv, (state, { id }) => ({
    ...state,
    selectedCv: state.cvs.filter(cv => cv.id === id),
  })),
);
