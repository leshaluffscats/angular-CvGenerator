import { createAction, props } from '@ngrx/store';
import { IProject } from 'src/app/shared/interfaces/projects.interface';

export const getProjects = createAction(
  '[Projects list] Get projects from API',
);

export const getProjectsFromApiSuccess = createAction(
  '[Projects list] Get projects from API success',
  props<{ projects: IProject[] }>(),
);

export const getProjectsFromApiFailure = createAction(
  '[Projects list] Get projects from API failure',
);
