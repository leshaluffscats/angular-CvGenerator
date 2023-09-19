import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICv, IVirtualCvForm } from 'src/app/shared/interfaces/cv.interface';
import { CvsService } from 'src/app/shared/services/cvs/cvs.service';
import { AppState } from '..';
import { addToCvs, resetCvs, selectCv, updateCv } from './cvs.actions';
import { getSelectedCv, selectCvs } from './cvs.selector';

@Injectable({
  providedIn: 'root',
})
export class CvsFacade {
  constructor(
    private store: Store<AppState>,
    private cvService: CvsService,
  ) {}

  public getCvs(): Observable<ICv[]> {
    return this.store.select(selectCvs);
  }

  public addToCvs(cv: IVirtualCvForm): void {
    this.store.dispatch(
      addToCvs({ cv: this.cvService.tranformCvFormToCv(cv) }),
    );
  }
  public resetCvs(): void {
    this.store.dispatch(resetCvs());
  }

  public addToUpdatedCvs(cv: ICv): void {
    this.store.dispatch(updateCv({ cv }));
  }

  public selectCv(id: number): void {
    this.store.dispatch(selectCv({ id }));
  }

  public getSelectedCv(): Observable<ICv[]> {
    return this.store.select(getSelectedCv);
  }
}
