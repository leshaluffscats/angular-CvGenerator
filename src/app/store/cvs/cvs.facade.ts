import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '..';
import { Observable } from 'rxjs';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { selectNewCvs } from './cvs.selector';

@Injectable({
  providedIn: 'root',
})
export class CvsFacade {
  constructor(private store: Store<AppState>) {}

  public getNewCvs(): Observable<ICv[]> {
    return this.store.select(selectNewCvs);
  }
}
