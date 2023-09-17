import { INameAndId } from 'src/app/shared/interfaces/projects.interface';

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
