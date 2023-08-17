import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  // forwardRef,
  // Self,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  // NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { InputComponent } from '../input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [
    CommonModule,
    DatepickerComponent,
    InputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class ProjectFormComponent implements ControlValueAccessor, OnInit {
  public formGroupControl: FormGroup;

  constructor(
    private ngControl: NgControl,
    private fb: FormBuilder,
    private readonly cdRef: ChangeDetectorRef,
  ) {
    this.ngControl.valueAccessor = this;
    this.formGroupControl = this.fb.group({
      textControl: [''],
      dateControl: [''],
    });
  }

  ngOnInit(): void {
    this.initControlValueChanges();
  }

  public writeValue(obj: { [key: string]: string }): void {
    this.formGroupControl.setValue(obj, { emitEvent: false });
    this.cdRef.detectChanges();
  }
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public onTouched: () => void;
  public onChange: (value: string) => void;

  private initControlValueChanges(): void {
    this.formGroupControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(value => {
        console.log(value);
        this.onChange(value);
      });
  }
}
