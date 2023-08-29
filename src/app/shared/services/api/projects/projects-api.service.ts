import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { API_PROJECTS_URL } from 'src/app/shared/constants/api.consts';
import {
  IProject,
  IProjectDto,
  IProjectForm,
} from 'src/app/shared/interfaces/projects.interface';
import { ProjectsService } from '../../projects/projects.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  constructor(
    private http: HttpClient,
    private projectService: ProjectsService,
  ) {}

  public addProject(body: IProjectForm) {
    return this.http.post(API_PROJECTS_URL, body);
  }

  public getProjects(): Observable<IProject[]> {
    return this.http.get<IProjectDto[]>(API_PROJECTS_URL).pipe(
      map((projectsArr: IProjectDto[]) => {
        return projectsArr.map((project: IProjectDto) =>
          this.projectService.modifyObj(project),
        );
      }),
    );
  }
}
