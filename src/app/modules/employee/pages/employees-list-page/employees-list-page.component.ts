import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import {
  EDIT_EMPLOYEE,
  EMPLOYEES,
} from 'src/app/shared/constants/routing-paths.consts';
import { IEmployeeData } from 'src/app/shared/interfaces/employees.interface';
import { CommonFacade } from 'src/app/store/common/common.facade';
import { EmployeesFacade } from 'src/app/store/employees/employees.facade';
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

  constructor(
    private employeesFacade: EmployeesFacade,
    private router: Router,
    private commonFacade: CommonFacade,
  ) {}

  ngOnInit(): void {
    this.commonFacade.pushToBreadCrumbs([
      { label: 'Employess', routerLink: EMPLOYEES.path },
    ]);

    this.employeesData$ = this.employeesFacade.getEmployees();
  }

  public navigateToEmployee(employee: IEmployeeData): void {
    this.router.navigate([EMPLOYEES.path, EDIT_EMPLOYEE.path, employee.id]);
  }
}
