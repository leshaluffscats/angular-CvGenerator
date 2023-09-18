import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { concatMap } from 'rxjs';
import { EMPLOYEES } from 'src/app/shared/constants/routing-paths.consts';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { IEmployeeDto } from 'src/app/shared/interfaces/employees.interface';
import { CvApiService } from 'src/app/shared/services/api/cv/cv.api.service';
import { EmployeesApiService } from 'src/app/shared/services/api/employees/employees.api.service';
import { CvsFacade } from 'src/app/store/cvs/cvs.facade';

@UntilDestroy()
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
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
  ) {}

  public addEmployeeAndCv(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAsTouched();
      return;
    }

    this.cvFacade.getCvs().subscribe((cvs: ICv[]) => (this.cvs = cvs));
    console.log(this.cvs);
    this.employeeApiService
      .addEmployee(this.employeeForm.getRawValue())
      .pipe(
        untilDestroyed(this),
        concatMap((employee: IEmployeeDto) =>
          this.cvApiService.addCv(this.cvs, employee.id),
        ),
      )
      .subscribe(() => this.router.navigate([EMPLOYEES.path]));
  }
}
