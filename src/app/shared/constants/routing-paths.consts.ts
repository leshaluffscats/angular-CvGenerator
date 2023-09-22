import { IRoutingPath } from '../interfaces/routing-path.interface';

export const EMPTY_PATH: IRoutingPath = {
  path: '',
  fullPath: '',
};

export const CORE_PATH: IRoutingPath = EMPTY_PATH;
export const EMPLOYEE_LIST_PATH: IRoutingPath = EMPTY_PATH;
export const PROJECT_LIST_PATH: IRoutingPath = EMPTY_PATH;
export const AUTH_PATH: IRoutingPath = EMPTY_PATH;

export const CORE: IRoutingPath = {
  path: 'home',
  fullPath: '/home',
};

export const AUTH: IRoutingPath = {
  path: 'auth',
  fullPath: '/auth',
};

export const EMPLOYEES: IRoutingPath = {
  path: 'employees',
  fullPath: '/employees',
};

export const ADD_EMPLOYEE: IRoutingPath = {
  path: 'add',
  fullPath: '/add',
};

export const EDIT_EMPLOYEE: IRoutingPath = {
  path: 'edit',
  fullPath: '/edit',
};

export const PROJECTS: IRoutingPath = {
  path: 'projects',
  fullPath: '/projects',
};

export const ADD_PROJECT: IRoutingPath = {
  path: 'add',
  fullPath: '/add',
};

export const EDIT_PROJECT: IRoutingPath = {
  path: 'edit',
  fullPath: '/edit',
};

export const PDF: IRoutingPath = {
  path: 'pdf',
  fullPath: '/pdf',
};

export const ID_PATH: IRoutingPath = {
  path: ':id',
  fullPath: '/:id',
};
