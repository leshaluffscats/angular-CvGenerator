import { createReducer, on } from '@ngrx/store';
import {
  IEmployeeData,
  ISingleEmployeeInfo,
} from 'src/app/shared/interfaces/employees.interface';
import { IError } from 'src/app/shared/interfaces/error.interface';
import * as employeesActions from './employees.actions';

export interface IEmployeeInitialState {
  employees: IEmployeeData[];
  employee: ISingleEmployeeInfo;
  isLoading: boolean;
  error: IError;
}

export const employeeInitialState: IEmployeeInitialState = {
  employees: null,
  employee: null,
  isLoading: false,
  error: null,
};

export const employeesReducer = createReducer(
  employeeInitialState,
  on(employeesActions.getEmployees, state => ({
    ...state,
    isLoading: true,
  })),
  on(employeesActions.getEmployeesSuccess, (state, { employees }) => ({
    ...state,
    employees: employees,
    isLoading: false,
    error: null,
  })),
  on(employeesActions.getEmployeesFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
  on(employeesActions.getEmployeeByid, state => ({
    ...state,
    isLoading: true,
  })),
  on(employeesActions.getEmployeeByidSuccess, (state, { employee }) => ({
    ...state,
    isLoading: false,
    error: null,
    employee,
  })),
  on(employeesActions.resetEmployeeInfo, state => ({
    ...state,
    employee: null,
  })),
);
