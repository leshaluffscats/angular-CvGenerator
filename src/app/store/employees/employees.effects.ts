import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import {
  IEmployeeData,
  ISingleEmployeeInfo,
} from 'src/app/shared/interfaces/employees.interface';
import { IError } from 'src/app/shared/interfaces/error.interface';
import { EmployeesApiService } from 'src/app/shared/services/api/employees/employees.api.service';
import { NotificationService } from 'src/app/shared/services/error/error.service';
import { AppState } from '..';
import * as employeesActions from './employees.actions';
import { CvsService } from 'src/app/shared/services/cvs/cvs.service';
import * as cvsActions from '../cvs/cvs.actions';

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
  getEmployeeById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeesActions.getEmployeeByid),
      mergeMap(({ id }) =>
        this.employeesApi.getEmployeeById(id).pipe(
          map(
            (employee: ISingleEmployeeInfo) => {
              this.store.dispatch(
                cvsActions.receiveCvs({
                  cvs: employee.cvs.map(cv =>
                    this.cvService.tranformCvDtoToCv(cv),
                  ),
                }),
              );
              return employeesActions.getEmployeeByidSuccess({ employee });
            },
            catchError((error: IError) => {
              this.errorService.showError(error.message);
              return of(employeesActions.getEmployeeByidFailure());
            }),
          ),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private errorService: NotificationService,
    private employeesApi: EmployeesApiService,
    private cvService: CvsService,
    private store: Store<AppState>,
  ) {}
}
