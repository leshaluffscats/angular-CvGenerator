import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, mergeMap, tap } from 'rxjs';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects/projects-api.service';
import * as projectsActions from './projects.actions';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';

@Injectable()
export class ProjectsEffects {
  getProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(projectsActions.getProjects),
      mergeMap(() =>
        this.projectsApi.getProjects().pipe(
          tap(console.log),
          map((projects: IProject[]) => {
            projects.map((project: IProject) => {
              this.projectsService.modifyObj(project);
            });
            return projectsActions.getProjectsFromApiSuccess({ projects });
          }),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private projectsApi: ProjectsApiService,
    private projectsService: ProjectsService,
  ) {}
}
