import { Injectable } from '@angular/core';
import { ICv, ICvDto, IVirtualCvForm } from '../../interfaces/cv.interface';
import { ProjectsService } from '../projects/projects.service';

@Injectable({
  providedIn: 'root',
})
export class CvsService {
  constructor(private projectsService: ProjectsService) {}

  public tranformCvFormToCv(cv: IVirtualCvForm): ICv {
    return {
      cvName: cv.cvName,
      firstName: cv.employeeForm.firstName,
      lastName: cv.employeeForm.lastName,
      email: cv.employeeForm.email,
      department: cv.employeeForm.department,
      specialization: cv.employeeForm.specialization,
      skills: cv.skills,
      id: cv.id,
      employeeId: cv.employeeId,
      isNew: cv.isNew,
      isEdited: cv.isEdited,
      projects: cv.projectForms,
      language: cv.languageForms.map(language => ({
        name: { name: language.name },
        level: { name: language.level },
      })),
    };
  }

  public transformCvToCvForm(cv: ICv): IVirtualCvForm {
    return {
      cvName: cv.cvName,
      id: cv.id,
      employeeId: cv.employeeId,
      employeeForm: {
        firstName: cv.firstName,
        lastName: cv.lastName,
        email: cv.email,
        department: cv.department,
        specialization: cv.specialization,
      },
      isNew: cv.isNew,
      projectForms: cv.projects,
      skills: cv.skills,
      languageForms: cv.language.map(language => ({
        name: language.name.name,
        level: language.level.name,
      })),
    };
  }

  public tranformCvDtoToCv(cv: ICvDto): ICv {
    return {
      id: cv.id,
      cvName: cv.cvName,
      firstName: cv.firstName,
      lastName: cv.lastName,
      email: cv.email,
      department: cv.department.name,
      specialization: cv.specialization.name,
      skills: cv.skills.map(skill => skill.name),
      language: cv.language,
      employeeId: cv.employeeId,
      projects: this.projectsService.modifyProjectsArr(cv.cvsProjects),
    };
  }
}
