import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { EmployeesApiService } from 'src/app/shared/services/api/employees/employees.api.service';
import { IEmployeeData } from '../../interfaces/employees.interface';
import { columns } from './constants/employees.const';

@UntilDestroy()
@Component({
  selector: 'app-employees-list-page',
  templateUrl: './employees-list-page.component.html',
  styleUrls: ['./employees-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListPageComponent implements OnInit {
  public columns = columns;
  public employeesData$: Observable<IEmployeeData[]>;

  constructor(private employeesService: EmployeesApiService) {}

  ngOnInit(): void {
    this.employeesData$ = this.employeesService.getEmployees();
  }
}
