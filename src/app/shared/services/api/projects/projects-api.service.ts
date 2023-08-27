import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PROJECTS_URL } from 'src/app/shared/constants/api.consts';
import {
  IProject,
  IProjectForm,
} from 'src/app/shared/interfaces/projects.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  constructor(private http: HttpClient) {}

  public addProject(body: IProjectForm) {
    return this.http.post(API_PROJECTS_URL, body);
  }

  public getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(API_PROJECTS_URL);
  }
}
