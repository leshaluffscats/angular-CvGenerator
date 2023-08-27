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
  techStack: ITechStack[];
  responsibilities: IResponsibilites[];
  teamRoles: ITeamRoles[];
}

interface ITechStack {
  id: number;
  name: string;
}
interface IResponsibilites extends ITechStack {}
interface ITeamRoles extends ITechStack {}
