import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { AppState } from '..';
import {
  addToCvs,
  deleteCv,
  loadCvFromApi,
  resetCvs,
  resetSelectedCv,
  selectCv,
} from './cvs.actions';
import {
  getSelectedCv,
  selectAllCvs,
  selectEditedCvs,
  selectLoadingState,
  selectNewCvs,
} from './cvs.selector';

@Injectable({
  providedIn: 'root',
})
export class CvsFacade {
  constructor(private store: Store<AppState>) {}

  public getCvs(): Observable<ICv[]> {
    return this.store.select(selectAllCvs);
  }

  public addToCvs(cv: ICv): void {
    this.store.dispatch(addToCvs({ cv }));
  }

  public resetCvs(): void {
    this.store.dispatch(resetCvs());
  }

  public selectCv(id: number): void {
    this.store.dispatch(selectCv({ id }));
  }

  public getSelectedCv(): Observable<ICv> {
    return this.store.select(getSelectedCv);
  }

  public resetSelectedCv(): void {
    this.store.dispatch(resetSelectedCv());
  }

  public selectNewCvs(): Observable<ICv[]> {
    return this.store.select(selectNewCvs);
  }

  public selectEditedCvs(): Observable<ICv[]> {
    return this.store.select(selectEditedCvs);
  }

  public deleteCv(id: number): void {
    this.store.dispatch(deleteCv({ id }));
  }

  public loadCvFromApi(id: string): void {
    this.store.dispatch(loadCvFromApi({ id }));
  }

  public isCvLoading(): Observable<boolean> {
    return this.store.select(selectLoadingState);
  }
}
