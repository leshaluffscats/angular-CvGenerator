export interface IProjectsMock {
  name: string;
  id: number;
  startDate: string;
  endDate: string;
  techStack: string;
}

export interface IColumnName {
  fieldCaption: string;
  fieldValue: string;
}

export const projectsData: IProjectsMock[] = [
  {
    name: 'todo',
    id: 1,
    startDate: '01.09.2020',
    endDate: '02.09.2020',
    techStack: 'Angular, Nest, Java',
  },
  {
    name: 'CV',
    id: 2,
    startDate: '05.12.2021',
    endDate: '02.10.2022',
    techStack: 'Angular',
  },
  {
    name: 'Finance',
    id: 3,
    startDate: '01.10.2015',
    endDate: '10.09.2016',
    techStack: 'React',
  },
  {
    name: 'Bank',
    id: 4,
    startDate: '15.03.2022',
    endDate: 'In proccess',
    techStack: 'Angular, Node',
  },
];
