import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { concatMap } from 'rxjs';
import { EMPLOYEES } from 'src/app/shared/constants/routing-paths.consts';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import {
  IEmployeeDto,
  ISingleEmployeeInfo,
} from 'src/app/shared/interfaces/employees.interface';
import { CvApiService } from 'src/app/shared/services/api/cv/cv.api.service';
import { EmployeesApiService } from 'src/app/shared/services/api/employees/employees.api.service';
import { CvsFacade } from 'src/app/store/cvs/cvs.facade';
import { EmployeesFacade } from 'src/app/store/employees/employees.facade';

@UntilDestroy()
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit, OnDestroy {
  public cvs: ICv[];
  public employeeForm: FormControl = new FormControl({
    firstName: '',
    lastName: '',
    email: '',
    specialization: '',
    department: '',
  });

  constructor(
    private employeeApiService: EmployeesApiService,
    private router: Router,
    private cvApiService: CvApiService,
    private cvFacade: CvsFacade,
    private employeesFacade: EmployeesFacade,
  ) {}

  ngOnInit(): void {
    this.employeesFacade
      .selectEmployee()
      .pipe(untilDestroyed(this))
      .subscribe((employee: ISingleEmployeeInfo) => {
        if (employee) {
          this.employeeForm.setValue({
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            specialization: employee.specialization.name,
            department: employee.department.name,
          });
        }
      });
  }

  ngOnDestroy(): void {
    this.employeesFacade.resetEmployee();
  }

  public addEmployeeAndCv(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAsTouched();
      return;
    }

    this.cvFacade
      .getCvs()
      .pipe(untilDestroyed(this))
      .subscribe((cvs: ICv[]) => (this.cvs = cvs));

    this.employeeApiService
      .addEmployee(this.employeeForm.getRawValue())
      .pipe(
        untilDestroyed(this),
        concatMap((employee: IEmployeeDto) =>
          this.cvApiService.addCvs(this.cvs, employee.id),
        ),
      )
      .subscribe(() => this.router.navigate([EMPLOYEES.path]));
  }
}
