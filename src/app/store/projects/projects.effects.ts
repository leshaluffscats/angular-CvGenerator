import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects/projects-api.service';
import { NotificationService } from 'src/app/shared/services/error/error.service';
import * as projectsActions from './projects.actions';

@Injectable()
export class ProjectsEffects {
  getProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(projectsActions.getProjects),
      mergeMap(() =>
        this.projectsApi.getProjects().pipe(
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

  getProjectByid$ = createEffect(() =>
    this.actions$.pipe(
      ofType(projectsActions.getProjectById),
      mergeMap(({ id }) =>
        this.projectsApi.getProjectById(id).pipe(
          map((project: IProject) =>
            projectsActions.getProjectByIdSuccess({ project }),
          ),
          catchError(error => {
            this.errorService.showError(error.message);
            return of(projectsActions.getProjectByIdFailure);
          }),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private projectsApi: ProjectsApiService,
    private errorService: NotificationService,
  ) {}
}
