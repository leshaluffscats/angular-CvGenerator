import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '..';
import { selectTheme } from './common.selector';
import { Observable } from 'rxjs';
import { changeTheme } from './common.actions';

@Injectable({
  providedIn: 'root',
})
export class CommonFacade {
  constructor(private store: Store<AppState>) {}

  public toggleTheme(): Observable<boolean> {
    this.store.dispatch(changeTheme());
    return this.store.select(selectTheme);
  }
}
