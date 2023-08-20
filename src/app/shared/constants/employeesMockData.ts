export interface IEmployeesMock {
  name: string;
  lastName: string;
  id: number;
  experience: string;
  technology: string;
}

export const employeesMockData: IEmployeesMock[] = [
  {
    name: 'alex',
    lastName: 'anuak',
    id: 1,
    experience: '1 year',
    technology: 'Angular',
  },
  {
    name: 'vlad',
    lastName: 'vladok',
    id: 2,
    experience: '5 years',
    technology: 'React',
  },
  {
    name: 'Andrew',
    lastName: 'Wedrew',
    id: 3,
    experience: '3 years',
    technology: 'Angular, Nest.js',
  },
  {
    name: 'Nikita',
    lastName: 'Kinita',
    id: 4,
    experience: '2 years',
    technology: 'Java',
  },
  {
    name: 'Sanya',
    lastName: 'Danik',
    id: 5,
    experience: '2 years',
    technology: 'Vue',
  },
  {
    name: 'Vitalik',
    lastName: 'Set',
    id: 6,
    experience: '7 years',
    technology: 'C++',
  },
];
