// собрать все редьюсеры и т.д

import { IAuthInitialState } from './auth/auth.reducer';
import { IProjectsInitialState } from './projects/projects.reducer';

export interface AppState {
  auth: IAuthInitialState;
  projects: IProjectsInitialState;
}
