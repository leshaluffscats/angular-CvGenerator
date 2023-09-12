import { INameAndId, IProject, IProjectDto } from './projects.interface';

export interface ICv {
  cvName: string;
  language: ILanguage[];
  skills: string[];
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  specialization: string;
  employeeId: number;
  projects: IProject[];
}

export interface ILanguage {
  level: string;
  name: string;
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
  id: number;
  name: string;
  level: string;
}
