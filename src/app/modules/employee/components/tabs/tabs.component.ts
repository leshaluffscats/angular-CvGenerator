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

  constructor(private employeesFacade: EmployeesFacade) {}

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
}
