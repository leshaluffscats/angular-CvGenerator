import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeesApiService } from 'src/app/shared/services/api/employees/employees.api.service';
import { ErrorService } from 'src/app/shared/services/error/error.service';
import * as employeesActions from './employees.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { IEmployeeData } from 'src/app/shared/interfaces/employees.interface';
import { IError } from 'src/app/shared/interfaces/error.interface';

@Injectable()
export class EmployeesEffects {
  getEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeesActions.getEmployees),
      mergeMap(() =>
        this.employeesApi.getEmployees().pipe(
          map((employees: IEmployeeData[]) =>
            employeesActions.getEmployeesSuccess({ employees }),
          ),
          catchError((error: IError) => {
            this.errorService.showError(error.message);
            return of(employeesActions.getEmployeesFailure({ error }));
          }),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private errorService: ErrorService,
    private employeesApi: EmployeesApiService,
  ) {}
}
