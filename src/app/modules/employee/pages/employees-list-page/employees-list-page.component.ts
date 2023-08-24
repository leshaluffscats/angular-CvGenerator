import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EmployeesApiService } from 'src/app/shared/services/api/employees/employees.api.service';
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
export class EmployeesListPageComponent implements OnInit {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public employeesData: any[] = employeesMockData;

  constructor(private employeesService: EmployeesApiService) {}

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe();
  }
}
