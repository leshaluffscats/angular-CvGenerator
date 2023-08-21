import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  // IEmployeesMock,
  employeesMockData,
} from '../../../../shared/constants/employeesMockData';

@Component({
  selector: 'app-employees-list-page',
  templateUrl: './employees-list-page.component.html',
  styleUrls: ['./employees-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListPageComponent {
  public columns = [
    {
      fieldValue: 'firstName',
      fieldCaption: 'First name',
    },
    {
      fieldValue: 'lastName',
      fieldCaption: 'Last name',
    },
    {
      fieldValue: 'id',
      fieldCaption: 'id',
    },
    {
      fieldValue: 'experience',
      fieldCaption: 'experience',
    },
    {
      fieldValue: 'technology',
      fieldCaption: 'technology',
    },
  ];
  public employeesData: unknown[] = employeesMockData;
}
