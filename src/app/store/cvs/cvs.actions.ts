import { createAction, props } from '@ngrx/store';
import { ICv } from 'src/app/shared/interfaces/cv.interface';

export const addToCvs = createAction('[CV] Add new CV', props<{ cv: ICv }>());
