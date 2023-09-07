import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '..';
import { Observable } from 'rxjs';
import { IEmployeeData } from 'src/app/shared/interfaces/employees.interface';
import { getEmployees } from './employees.actions';
import { selectEmployees } from './employees.selector';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFacade {
  constructor(private store: Store<AppState>) {}

  public getEmployees(): Observable<IEmployeeData[]> {
    this.store.dispatch(getEmployees());
    return this.store.select(selectEmployees);
  }
}
