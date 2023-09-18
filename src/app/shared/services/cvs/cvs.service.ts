import { Injectable } from '@angular/core';
import { ICv, IVirtualCvForm } from '../../interfaces/cv.interface';

@Injectable({
  providedIn: 'root',
})
export class CvsService {
  constructor() {}

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
      employeeForm: {
        firstName: cv.firstName,
        lastName: cv.lastName,
        email: cv.email,
        department: cv.department,
        specialization: cv.specialization,
      },
      projectForms: cv.projects,
      skills: cv.skills,
      languageForms: cv.language.map(language => ({
        name: language.name.name,
        level: language.level.name,
      })),
    };
  }
}
