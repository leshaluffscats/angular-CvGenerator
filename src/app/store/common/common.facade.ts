import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { AppState } from '..';
import { changeTheme, pushToBreadCrumbs, setTitles } from './common.actions';
import {
  selectBreadCrumbs,
  selectTheme,
  selectTitles,
} from './common.selector';
import { ITitle } from 'src/app/shared/interfaces/titles.interface';

@Injectable({
  providedIn: 'root',
})
export class CommonFacade {
  constructor(private store: Store<AppState>) {}

  public getTheme(): Observable<boolean> {
    return this.store.select(selectTheme);
  }

  public toggleTheme(): Observable<boolean> {
    this.store.dispatch(changeTheme());
    return this.store.select(selectTheme);
  }

  public getBreadCrumbs(): Observable<IBreadCrumb[]> {
    return this.store.select(selectBreadCrumbs);
  }

  public pushToBreadCrumbs(data: IBreadCrumb[]): void {
    this.store.dispatch(pushToBreadCrumbs({ data }));
  }

  public setTitles(titles: ITitle): void {
    this.store.dispatch(setTitles({ titles }));
  }

  public getTitles(): Observable<ITitle> {
    return this.store.select(selectTitles);
  }
}
