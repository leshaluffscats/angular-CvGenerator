import { AuthEffects } from './auth/auth.effects';
import { IAuthInitialState, authReducer } from './auth/auth.reducer';
import { ProjectsEffects } from './projects/projects.effects';
import {
  IProjectsInitialState,
  projectsReducer,
} from './projects/projects.reducer';

export interface AppState {
  auth: IAuthInitialState;
  projects: IProjectsInitialState;
}

export const reducers = {
  auth: authReducer,
  projects: projectsReducer,
};

export const effects = [AuthEffects, ProjectsEffects];
