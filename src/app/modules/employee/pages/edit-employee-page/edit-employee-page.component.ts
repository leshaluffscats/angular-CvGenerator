import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, switchMap, take } from 'rxjs';
import {
  EDIT_EMPLOYEE,
  EMPLOYEES,
} from 'src/app/shared/constants/routing-paths.consts';
import { EmployeesApiService } from 'src/app/shared/services/api/employees/employees.api.service';
import { CommonFacade } from 'src/app/store/common/common.facade';
import { EmployeesFacade } from 'src/app/store/employees/employees.facade';

@UntilDestroy()
@Component({
  selector: 'edit-employee-page-page',
  templateUrl: './edit-employee-page.component.html',
  styleUrls: ['./edit-employee-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditEmployeePageComponent implements OnInit {
  private id: string;

  constructor(
    private commonFacade: CommonFacade,
    private employeesFacade: EmployeesFacade,
    private activatedRoute: ActivatedRoute,
    private employeesApi: EmployeesApiService,
  ) {}

  public ngOnInit(): void {
    this.commonFacade.pushToBreadCrumbs([
      { label: 'Employees', routerLink: EMPLOYEES.path },
      { label: 'Edit', routerLink: EMPLOYEES.path + EDIT_EMPLOYEE.fullPath },
    ]);
    this.activatedRoute.paramMap
      .pipe(
        untilDestroyed(this),
        switchMap((params: ParamMap) => {
          this.id = params.get('id');
          return this.employeesFacade.getEmployee(this.id);
        }),
        filter(Boolean),
        take(1),
      )
      .subscribe(employee => {
        console.log(employee);
        this.commonFacade.setTitles({
          title: 'Employee',
          subtitle: `${employee.firstName} ${employee.lastName}'s profile`,
        });
      });
  }

  public deleteEmployee(): void {
    this.employeesApi
      .deleteEmployee(this.id)
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
