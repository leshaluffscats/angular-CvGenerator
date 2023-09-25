import { createAction, props } from '@ngrx/store';
import { ICv } from 'src/app/shared/interfaces/cv.interface';

export const addToCvs = createAction('[CV] Add new CV', props<{ cv: ICv }>());
export const receiveCvs = createAction(
  '[Cvs] Receive Cvs',
  props<{ cvs: ICv[] }>(),
);

export const resetCvs = createAction('[Cvs] Reset cvs');

export const updateCv = createAction('[Cvs] Update cvs', props<{ cv: ICv }>());

export const selectCv = createAction('[Cv] Select cv', props<{ id: number }>());

export const resetSelectedCv = createAction('[Cv] Reset selected cv');

export const deleteCv = createAction('[Cv] Delete cv', props<{ id: number }>());

export const loadCvFromApi = createAction(
  '[Cv] load cv from api',
  props<{ id: string }>(),
);
export const loadCvFromApiSuccess = createAction(
  '[Cv] load cv from api success',
  props<{ cv: ICv }>(),
);

export const loadCvFromApiFailure = createAction(
  '[Cv] load cv from api failure',
);

export const setLoadingToTrue = createAction('[Cv] Set loading to true');
