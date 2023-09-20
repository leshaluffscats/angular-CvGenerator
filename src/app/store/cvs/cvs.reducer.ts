import { createReducer, on } from '@ngrx/store';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import * as cvsActions from './cvs.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

export interface ICvsInitialState extends EntityState<ICv> {
  cvs: ICv[];

  selectedCv: ICv | null;
}

export const cvsAdapter: EntityAdapter<ICv> = createEntityAdapter<ICv>();
export const cvsInitialState: ICvsInitialState = cvsAdapter.getInitialState({
  cvs: [],

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
  on(cvsActions.selectCv, (state, { id }) => ({
    ...state,
    selectedCv: state.entities[id] || null,
  })),
);
