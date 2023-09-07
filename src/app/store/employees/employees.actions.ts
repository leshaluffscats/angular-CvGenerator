import { createAction, props } from '@ngrx/store';
import { IEmployeeData } from 'src/app/shared/interfaces/employees.interface';
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
