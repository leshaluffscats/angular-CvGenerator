import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { InputComponent } from '../input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MessageModule } from 'primeng/message';
import { markAllAsDirty } from '../../utils/mark-all-as-dirty.utils';
import { ButtonModule } from 'primeng/button';

@UntilDestroy()
@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [
    CommonModule,
    DatepickerComponent,
    InputComponent,
    ReactiveFormsModule,
    MessageModule,
    ButtonModule,
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
      textControl: ['', [Validators.required, Validators.minLength(3)]],
      dateControl: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.initControlValueChanges();
  }

  public submitForm(): void {
    if (this.formGroupControl.invalid) {
      // this.formGroupControl.markAllAsTouched();
      markAllAsDirty(this.formGroupControl);
    }
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
        this.onChange(value);
      });
  }
}
