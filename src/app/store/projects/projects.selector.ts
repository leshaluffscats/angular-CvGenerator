import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { IProjectsInitialState } from './projects.reducer';

export const selectProjectsState = (state: AppState) => state.projects;

export const selectProjects = createSelector(
  selectProjectsState,
  (state: IProjectsInitialState) => state.projects,
);
