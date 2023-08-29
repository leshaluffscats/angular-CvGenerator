import { createReducer, on } from '@ngrx/store';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import * as projectsActions from './projects.actions';

export interface IProjectsInitialState {
  projects: IProject[];
  isLoading: boolean;
}

export const projectsInitialState: IProjectsInitialState = {
  projects: null,
  isLoading: false,
};

export const projectsReducer = createReducer(
  projectsInitialState,
  on(projectsActions.getProjects, state => ({
    ...state,
    isLoading: true,
  })),
  on(projectsActions.getProjectsFromApiSuccess, (state, { projects }) => ({
    ...state,
    projects: projects,
    isLoading: false,
  })),
);
