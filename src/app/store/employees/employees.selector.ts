import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { IEmployeeInitialState } from './employees.reducer';

export const selectEmployeesState = (state: AppState) => state.employees;

export const selectEmployees = createSelector(
  selectEmployeesState,
  (state: IEmployeeInitialState) => state.employees,
);

export const selectEmployee = createSelector(
  selectEmployeesState,
  (state: IEmployeeInitialState) => state.employee,
);

// export const selectEmployeeCvs = createSelector(
//   selectEmployeesState,
//   (state: IEmployeeInitialState) => state.employee.cvs,
// );
