import { IEmployeeData } from './employees.interface';
import { INameAndId, IProject, IProjectDto } from './projects.interface';

export interface ICv {
  id?: number;
  cvName: string;
  language: ILanguageDto[];
  skills: string[];
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  specialization: string;
  employeeId?: number;
  projects: IProject[];
  isNew?: boolean;
  isEdited?: boolean;
}
// DTO
export interface ICvDto {
  id: number;
  cvName: string;
  language: ILanguageDto[];
  skills: INameAndId[];
  firstName: string;
  lastName: string;
  email: string;
  department: INameAndId;
  specialization: INameAndId;
  departmentId: number;
  specializationId: number;
  employeeId: number;
  cvsProjects: IProjectDto[];
}

export interface ILanguageDto {
  id?: number;
  nameId?: number;
  levelId?: number;
  name: {
    id?: number;
    name: string;
  };
  level: {
    id?: number;
    name: string;
  };
}

export interface ILanguage {
  name: string;
  level: string;
}

export interface IVirtualCvForm {
  cvName: string;
  employeeForm: IEmployeeData;
  skills: string[];
  projectForms: IProject[];
  languageForms: ILanguage[];
  id?: number;
  isNew?: boolean;
  isEdited?: boolean;

  employeeId?: number;
}
