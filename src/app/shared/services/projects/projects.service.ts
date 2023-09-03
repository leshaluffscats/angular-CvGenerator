import { Injectable } from '@angular/core';
import {
  INameAndId,
  IProject,
  IProjectDto,
} from '../../interfaces/projects.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  public modifyProjectsArr(projects: IProjectDto[]): IProject[] {
    return projects.map(el => this.modifyProject(el));
  }

  public modifyProject(project: IProjectDto): IProject {
    return {
      ...project,
      startDate: new Date(project.startDate).toLocaleDateString(),
      endDate: new Date(project.endDate).toLocaleDateString(),
      techStack: this.getName(project.techStack),
      responsibilities: this.getName(project.responsibilities),
      teamRoles: this.getName(project.teamRoles),
    };
  }

  private getName(arr: INameAndId[]): string[] {
    return arr.map(obj => obj.name);
  }
}
