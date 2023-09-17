import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { markAllAsDirty } from 'src/app/shared/utils/mark-all-as-dirty.utils';

@UntilDestroy()
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent
  implements ControlValueAccessor, DoCheck, OnInit
{
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private ngControl: NgControl,
  ) {
    this.ngControl.valueAccessor = this;

    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      specialization: ['', Validators.required],
      department: ['', Validators.required],
    });
  }

  public ngOnInit(): void {
    this.initControlValueChanges();
  }

  public ngDoCheck(): void {
    if (this.form.invalid) {
      this.ngControl.control.setErrors({ employeeFormError: true });
    }

    if (this.ngControl.control?.touched) {
      markAllAsDirty(this.form);
    } else {
      this.form.markAsPristine();
    }
    this.cdRef.markForCheck();
  }

  public writeValue(obj: { [key: string]: string }): void {
    this.form.setValue(obj, { emitEvent: false });
    this.cdRef.markForCheck();
  }
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onTouched: () => void;
  public onChange: (value: string) => void;

  private initControlValueChanges() {
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe(value => {
      this.onChange(value);
    });
  }
}
