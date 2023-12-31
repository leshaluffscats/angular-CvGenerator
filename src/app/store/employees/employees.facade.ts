import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  IEmployeeData,
  ISingleEmployeeInfo,
} from 'src/app/shared/interfaces/employees.interface';
import { AppState } from '..';
import {
  getEmployeeByid,
  getEmployees,
  resetEmployeeInfo,
} from './employees.actions';
import {
  selectEmployee,
  selectEmployees,
  selectLoading,
} from './employees.selector';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFacade {
  constructor(private store: Store<AppState>) {}

  public getEmployees(): Observable<IEmployeeData[]> {
    this.store.dispatch(getEmployees());
    return this.store.select(selectEmployees);
  }

  public getEmployee(id: string): Observable<ISingleEmployeeInfo> {
    this.store.dispatch(getEmployeeByid({ id }));
    return this.store.select(selectEmployee);
  }

  public selectEmployee(): Observable<ISingleEmployeeInfo> {
    return this.store.select(selectEmployee);
  }

  public resetEmployee(): void {
    this.store.dispatch(resetEmployeeInfo());
  }
  public selectLoadingState(): Observable<boolean> {
    return this.store.select(selectLoading);
  }
}
