import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { CvsService } from 'src/app/shared/services/cvs/cvs.service';
import { AppState } from '..';
import { addToCvs, resetCvs, resetSelectedCv, selectCv } from './cvs.actions';
import { getSelectedCv, selectAllCvs } from './cvs.selector';

@Injectable({
  providedIn: 'root',
})
export class CvsFacade {
  constructor(
    private store: Store<AppState>,
    private cvService: CvsService,
  ) {}

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
}
