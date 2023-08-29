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
  private map(arr: INameAndId[]): string[] {
    return arr.map(obj => obj.name);
  }

  public modifyObj(project: IProjectDto): IProject {
    return {
      ...project,
      startDate: new Date(project.startDate).toLocaleDateString(),
      endDate: new Date(project.endDate).toLocaleDateString(),
      techStack: this.map(project.techStack),
      responsibilities: this.map(project.responsibilities),
      teamRoles: this.map(project.teamRoles),
    };
  }

  constructor() {}
}
