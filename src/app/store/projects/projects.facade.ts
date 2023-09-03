import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import { AppState } from '..';
import { getProjectById, getProjects } from './projects.actions';
import { selectProject, selectProjects } from './projects.selector';

@Injectable({
  providedIn: 'root',
})
export class ProjectFacade {
  constructor(private store: Store<AppState>) {}

  public getProjects(): Observable<IProject[]> {
    this.store.dispatch(getProjects());
    return this.store.select(selectProjects);
  }

  public getProjectById(id: string): Observable<IProject> {
    this.store.dispatch(getProjectById({ id }));
    return this.store.select(selectProject);
  }
}
