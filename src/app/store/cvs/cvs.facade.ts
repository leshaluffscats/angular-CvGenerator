import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '..';
import { Observable } from 'rxjs';
import { ICv, IVirtualCvForm } from 'src/app/shared/interfaces/cv.interface';
import { selectCvs } from './cvs.selector';
import { addToCvs } from './cvs.actions';
import { CvsService } from 'src/app/shared/services/cvs/cvs.service';

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
}
