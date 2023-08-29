import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects/projects-api.service';
import { ErrorService } from 'src/app/shared/services/error/error.service';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';
import * as projectsActions from './projects.actions';

@Injectable()
export class ProjectsEffects {
  getProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(projectsActions.getProjects),
      mergeMap(() =>
        this.projectsApi.getProjects().pipe(
          tap(console.log),
          map((projects: IProject[]) =>
            projectsActions.getProjectsFromApiSuccess({ projects }),
          ),
          catchError(error => {
            this.errorService.showError(error.message);
            return of(projectsActions.getProjectsFromApiFailure());
          }),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private projectsApi: ProjectsApiService,
    private projectsService: ProjectsService,
    private errorService: ErrorService,
  ) {}
}
