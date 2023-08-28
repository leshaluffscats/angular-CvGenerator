import { Injectable } from '@angular/core';
import { IProject, INameAndId } from '../../interfaces/projects.interface';

type keyName = 'techStack' | 'teamRoles' | 'responsibilities';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private dateKeys: string[] = ['endDate', 'startDate'];
  private keysToMap: string[] = ['techStack', 'teamRoles', 'responsibilities'];

  public modifyObj(project: IProject) {
    for (const key in project) {
      if (this.keysToMap.includes(key)) {
        project[key as keyName] = project[key as keyName].map(
          (obj: INameAndId) => obj.name,
        );
      } else if (this.dateKeys.includes(key)) {
        project[key as keyName] = new Date(
          project[key as keyName],
        ).toLocaleDateString();
      }
    }
    return project;
  }

  constructor() {}
}
