import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { concatMap } from 'rxjs';
import {
  ADD_EMPLOYEE,
  EMPLOYEES,
} from 'src/app/shared/constants/routing-paths.consts';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import {
  IEmployeeData,
  IEmployeeDto,
} from 'src/app/shared/interfaces/employees.interface';
import { CvApiService } from 'src/app/shared/services/api/cv/cv.api.service';
import { EmployeesApiService } from 'src/app/shared/services/api/employees/employees.api.service';
import { NotificationService } from 'src/app/shared/services/error/error.service';
import { CommonFacade } from 'src/app/store/common/common.facade';
import { CvsFacade } from 'src/app/store/cvs/cvs.facade';
@UntilDestroy()
@Component({
  selector: 'app-add-employee-page',
  templateUrl: './add-employee-page.component.html',
  styleUrls: ['./add-employee-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEmployeePageComponent implements OnInit {
  private cvs: ICv[];
  constructor(
    private commonFacade: CommonFacade,
    private employeeApiService: EmployeesApiService,
    private router: Router,
    private cvApiService: CvApiService,
    private cvFacade: CvsFacade,
    private notification: NotificationService,
  ) {}

  ngOnInit(): void {
    this.commonFacade.pushToBreadCrumbs([
      { label: 'Employees', routerLink: EMPLOYEES.path },
      { label: 'Add', routerLink: EMPLOYEES.path + ADD_EMPLOYEE.fullPath },
    ]);
    this.commonFacade.setTitles({
      title: 'Employees',
      subtitle: 'Add new employee',
    });
  }

  public addEmployee(employee: IEmployeeData) {
    this.cvFacade
      .getCvs()
      .pipe(untilDestroyed(this))
      .subscribe((cvs: ICv[]) => (this.cvs = cvs));

    this.employeeApiService
      .addEmployee(employee)
      .pipe(
        untilDestroyed(this),
        concatMap((employee: IEmployeeDto) =>
          this.cvApiService.addCvs(this.cvs, employee.id),
        ),
      )
      .subscribe({
        next: () => {
          this.router.navigate([EMPLOYEES.path]);
          this.notification.showSuccessMessage(
            'New employee was succesfully added',
          );
        },
        error: error => this.notification.showError(error.message),
      });
  }
}
