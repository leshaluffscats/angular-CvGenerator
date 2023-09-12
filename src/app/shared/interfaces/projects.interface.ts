export interface IProjectForm {
  projectName: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  techStack: string[];
  description: string;
  responsibilities: string[];
  teamRoles: string[];
}

export interface IProject {
  id?: number;
  projectName: string;
  description: string;
  startDate: string | Date;
  endDate: string | Date;
  teamSize: number;
  techStack: string[];
  responsibilities: string[];
  teamRoles: string[];
}

export interface IProjectDto {
  id: number;
  projectName: string;
  description: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  techStack: INameAndId[];
  responsibilities: INameAndId[];
  teamRoles: INameAndId[];
}

export interface INameAndId {
  id: number;
  name: string;
}
