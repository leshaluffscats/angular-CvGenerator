import { INameAndId } from 'src/app/shared/interfaces/projects.interface';
import { ICvDto } from './cv.interface';

export interface IEmployeeData {
  firstName: string;
  lastName: string;
  department: string;
  specialization: string;
  email: string;
  id?: number;
}

export interface IEmployeeDto {
  firstName: string;
  lastName: string;
  department: INameAndId;
  specialization: INameAndId;
  email: string;
  id: number;
}

export interface ISingleEmployeeInfo {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  departmentId: number;
  specializationId: number;
  department: INameAndId;
  specialization: INameAndId;
  cvs: ICvDto[];
}
