import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { ISingleEmployeeInfo } from 'src/app/shared/interfaces/employees.interface';
import { EmployeesApiService } from 'src/app/shared/services/api/employees/employees.api.service';
import { NotificationService } from 'src/app/shared/services/error/error.service';
import { EmployeesFacade } from 'src/app/store/employees/employees.facade';

@UntilDestroy()
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit, OnDestroy {
  @Output() buttonClicked = new EventEmitter();

  public cvs: ICv[];
  public employeeForm: FormControl = new FormControl({
    firstName: '',
    lastName: '',
    email: '',
    specialization: '',
    department: '',
  });

  private employeeId: number;

  constructor(
    private employeesFacade: EmployeesFacade,
    private employeeApi: EmployeesApiService,
    private notification: NotificationService,
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

    this.buttonClicked.emit(this.employeeForm.getRawValue());
  }

  // public editEmployeeRealInfo(): void {
  //   this.employeeApi
  //     .updateEmployee(this.employeeId, this.employeeForm.getRawValue())
  //     .pipe(untilDestroyed(this))
  //     .subscribe({
  //       next: () =>
  //         this.notification.showSuccessMessage(
  //           'Employee real info was updated',
  //         ),
  //       error: error => this.notification.showError(error.message),
  //     });
  // }
}
