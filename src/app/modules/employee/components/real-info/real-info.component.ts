import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { EMPLOYEES } from 'src/app/shared/constants/routing-paths.consts';
import { EmployeesApiService } from 'src/app/shared/services/api/employees/employees.api.service';

@UntilDestroy()
@Component({
  selector: 'app-real-info',
  templateUrl: './real-info.component.html',
  styleUrls: ['./real-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RealInfoComponent {
  public employeeForm: FormControl = new FormControl({
    firstName: '',
    lastName: '',
    email: '',
    specialization: '',
    department: '',
    skills: '',
  });

  constructor(
    private employeeApiService: EmployeesApiService,
    private router: Router,
  ) {}

  public addEmployee(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAsTouched();
      return;
    }

    this.employeeApiService
      .addEmployee(this.employeeForm.getRawValue())
      .pipe(untilDestroyed(this))
      .subscribe(() => this.router.navigate([EMPLOYEES.path]));
  }
}
