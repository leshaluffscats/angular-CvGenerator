import { createReducer, on } from '@ngrx/store';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import * as cvsActions from './cvs.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

export interface ICvsInitialState extends EntityState<ICv> {
  isLoading: boolean;
  selectedCv: ICv;
}

export const cvsAdapter: EntityAdapter<ICv> = createEntityAdapter<ICv>();

export const cvsInitialState: ICvsInitialState = cvsAdapter.getInitialState({
  isLoading: false,
  selectedCv: null,
});

export const cvsReducer = createReducer(
  cvsInitialState,
  on(cvsActions.addToCvs, (state, { cv }) => {
    return cvsAdapter.upsertOne(cv, state);
  }),
  on(cvsActions.receiveCvs, (state, { cvs }) => {
    return cvsAdapter.setAll(cvs, state);
  }),
  on(cvsActions.resetCvs, state => {
    return cvsAdapter.removeAll(state);
  }),
  on(cvsActions.deleteCv, (state, { id }) => {
    return cvsAdapter.removeOne(id, state);
  }),
  on(cvsActions.selectCv, (state, { id }) => ({
    ...state,
    selectedCv: state.entities[id] || null,
    isLoading: false,
  })),
  on(cvsActions.resetSelectedCv, state => ({
    ...state,
    selectedCv: null,
  })),
  on(cvsActions.loadCvFromApi, state => ({
    ...state,
    isLoading: true,
  })),
  on(cvsActions.loadCvFromApiSuccess, (state, { cv }) => ({
    ...state,
    isLoading: false,
    selectedCv: cv,
  })),
  on(cvsActions.setLoadingToTrue, state => ({
    ...state,
    isLoading: true,
  })),
);
