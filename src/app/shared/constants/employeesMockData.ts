export interface IEmployeesMock {
  firstName: string;
  lastName: string;
  id: number;
  experience: string;
  technology: string;
}

export const employeesMockData: IEmployeesMock[] = [
  {
    firstName: 'alex',
    lastName: 'anuak',
    id: 1,
    experience: '1 year',
    technology: 'Angular',
  },
  {
    firstName: 'vlad',
    lastName: 'vladok',
    id: 2,
    experience: '5 years',
    technology: 'React',
  },
  {
    firstName: 'Andrew',
    lastName: 'Wedrew',
    id: 3,
    experience: '3 years',
    technology: 'Angular, Nest.js',
  },
  {
    firstName: 'Nikita',
    lastName: 'Kinita',
    id: 4,
    experience: '2 years',
    technology: 'Java',
  },
  {
    firstName: 'Sanya',
    lastName: 'Danik',
    id: 5,
    experience: '2 years',
    technology: 'Vue',
  },
  {
    firstName: 'Vitalik',
    lastName: 'Set',
    id: 6,
    experience: '7 years',
    technology: 'C++',
  },
];
