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
  id: number;
  projectName: string;
  description: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  techStack: unknown;
  responsibilities: unknown;
  teamRoles: unknown;
}

export interface INameAndId {
  id: number;
  name: string;
}
