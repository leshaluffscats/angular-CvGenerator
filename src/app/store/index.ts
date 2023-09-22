import { AuthEffects } from './auth/auth.effects';
import { IAuthInitialState, authReducer } from './auth/auth.reducer';
import { ICommonInitialState, commonReducer } from './common/common.reducer';
import { CvsEffects } from './cvs/cvs.effects';
import { ICvsInitialState, cvsReducer } from './cvs/cvs.reducer';
import { EmployeesEffects } from './employees/employees.effects';
import {
  IEmployeeInitialState,
  employeesReducer,
} from './employees/employees.reducer';
import { ProjectsEffects } from './projects/projects.effects';
import {
  IProjectsInitialState,
  projectsReducer,
} from './projects/projects.reducer';

export interface AppState {
  auth: IAuthInitialState;
  projects: IProjectsInitialState;
  common: ICommonInitialState;
  employees: IEmployeeInitialState;
  cvs: ICvsInitialState;
}

export const reducers = {
  auth: authReducer,
  projects: projectsReducer,
  common: commonReducer,
  employees: employeesReducer,
  cvs: cvsReducer,
};

export const effects = [
  AuthEffects,
  ProjectsEffects,
  EmployeesEffects,
  CvsEffects,
];
