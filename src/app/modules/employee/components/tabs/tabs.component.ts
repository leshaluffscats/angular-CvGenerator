import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { untilDestroyed } from '@ngneat/until-destroy';
import { EMPLOYEES } from 'src/app/shared/constants/routing-paths.consts';
import { EmployeesApiService } from 'src/app/shared/services/api/employees/employees.api.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
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
