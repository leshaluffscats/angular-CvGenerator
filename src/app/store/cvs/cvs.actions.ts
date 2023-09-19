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
