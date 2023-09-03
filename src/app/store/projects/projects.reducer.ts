import { createReducer, on } from '@ngrx/store';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import * as projectsActions from './projects.actions';
import { IError } from 'src/app/shared/interfaces/error.interface';

export interface IProjectsInitialState {
  projects: IProject[];
  isLoading: boolean;
  error: IError;
  project: IProject;
}

export const projectsInitialState: IProjectsInitialState = {
  projects: null,
  isLoading: false,
  error: null,
  project: null,
};

export const projectsReducer = createReducer(
  projectsInitialState,
  on(projectsActions.getProjects, state => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(projectsActions.getProjectsFromApiSuccess, (state, { projects }) => ({
    ...state,
    projects: projects,
    isLoading: false,
    error: null,
  })),
  on(projectsActions.getProjectById, state => ({
    ...state,
    isLoading: true,
  })),
  on(projectsActions.getProjectByIdSuccess, (state, { project }) => ({
    ...state,
    isLoading: false,
    error: null,
    project: project,
  })),
);
