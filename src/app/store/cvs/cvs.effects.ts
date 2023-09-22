import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { CvApiService } from 'src/app/shared/services/api/cv/cv.api.service';
import { NotificationService } from 'src/app/shared/services/error/error.service';
import * as cvsActions from './cvs.actions';

@Injectable()
export class CvsEffects {
  getProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cvsActions.loadCvFromApi),
      mergeMap(({ id }) =>
        this.cvApi.loadCvById(id).pipe(
          map((cv: ICv) => cvsActions.loadCvFromApiSuccess({ cv })),
          catchError(error => {
            this.errorService.showError(error.message);
            return of(cvsActions.loadCvFromApiFailure());
          }),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private errorService: NotificationService,
    private cvApi: CvApiService,
  ) {}
}
