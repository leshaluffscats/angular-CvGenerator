import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, filter, mergeMap, switchMap, take } from 'rxjs';
import {
  EDIT_EMPLOYEE,
  EMPLOYEES,
} from 'src/app/shared/constants/routing-paths.consts';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { CvApiService } from 'src/app/shared/services/api/cv/cv.api.service';
import { EmployeesApiService } from 'src/app/shared/services/api/employees/employees.api.service';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';
import { CommonFacade } from 'src/app/store/common/common.facade';
import { CvsFacade } from 'src/app/store/cvs/cvs.facade';
import { EmployeesFacade } from 'src/app/store/employees/employees.facade';

@UntilDestroy()
@Component({
  selector: 'edit-employee-page-page',
  templateUrl: './edit-employee-page.component.html',
  styleUrls: ['./edit-employee-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditEmployeePageComponent implements OnInit {
  public isLoading: Observable<boolean>;
  private id: string;

  constructor(
    private commonFacade: CommonFacade,
    private employeesFacade: EmployeesFacade,
    private activatedRoute: ActivatedRoute,
    private employeesApi: EmployeesApiService,
    private cvFacade: CvsFacade,
    private cvApi: CvApiService,
    private router: Router,
    private notification: NotificationService,
  ) {}

  public ngOnInit(): void {
    this.isLoading = this.employeesFacade.selectLoadingState();
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

  public editEmployee(): void {
    this.cvFacade
      .selectNewCvs()
      .pipe(
        untilDestroyed(this),
        mergeMap((cvs: ICv[]) => this.cvApi.addCvs(cvs)),
      )
      .subscribe({
        next: () => this.router.navigate([EMPLOYEES.path]),
        error: error => this.notification.showError(error.message),
      });

    this.cvFacade
      .selectEditedCvs()
      .pipe(
        untilDestroyed(this),
        mergeMap((cvs: ICv[]) => this.cvApi.updateCvs(cvs)),
      )
      .subscribe({
        next: () => {
          this.router.navigate([EMPLOYEES.path]);
          this.notification.showSuccessMessage('Employee info was updated');
        },
        error: error => this.notification.showError(error.message),
      });
  }
}
