import { createAction, props } from '@ngrx/store';
import {
  IEmployeeData,
  ISingleEmployeeInfo,
} from 'src/app/shared/interfaces/employees.interface';
import { IError } from 'src/app/shared/interfaces/error.interface';

export const getEmployees = createAction('[Employees] Get employees');
export const getEmployeesSuccess = createAction(
  '[Employees] Get employees success',
  props<{ employees: IEmployeeData[] }>(),
);
export const getEmployeesFailure = createAction(
  '[Employees] Get employees failure',
  props<{ error: IError }>(),
);

export const getEmployeeByid = createAction(
  '[Employees] Get employee by id',
  props<{ id: string }>(),
);
export const getEmployeeByidSuccess = createAction(
  '[Employees] Get employee by id success',
  props<{ employee: ISingleEmployeeInfo }>(),
);
export const getEmployeeByidFailure = createAction(
  '[Employees] Get employee by id failure',
);

export const resetEmployeeInfo = createAction(
  '[Employees] Reset employee info',
);
