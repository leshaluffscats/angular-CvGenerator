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

  public addProject(project: IProjectForm): Observable<IProject> {
    return this.http.post<IProject>(API_PROJECTS_URL, project);
  }

  public getProjects(): Observable<IProject[]> {
    return this.http
      .get<IProjectDto[]>(API_PROJECTS_URL)
      .pipe(
        map((projectsArr: IProjectDto[]) =>
          this.projectService.modifyProjectsArr(projectsArr),
        ),
      );
  }

  public getProjectById(id: string): Observable<IProject> {
    return this.http
      .get<IProjectDto>(`${API_PROJECTS_URL}/${id}`)
      .pipe(
        map((project: IProjectDto) =>
          this.projectService.modifyProject(project),
        ),
      );
  }

  public updateProject(id: string, project: IProject): Observable<IProject> {
    return this.http.put<IProject>(`${API_PROJECTS_URL}/${id}`, project);
  }

  public deleteProject(id: string): Observable<IProjectDto> {
    return this.http.delete<IProjectDto>(`${API_PROJECTS_URL}/${id}`);
  }
}
