import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MessageModule } from 'primeng/message';
import { markAllAsDirty } from '../../utils/mark-all-as-dirty.utils';
import { ChipsComponent } from '../chips/chips.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { InputComponent } from '../input/input.component';
import { TextareaComponent } from '../textarea/textarea.component';

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

    TextareaComponent,
    ChipsComponent,
  ],
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class ProjectFormComponent implements ControlValueAccessor, OnInit {
  public formGroup: FormGroup;

  constructor(
    private ngControl: NgControl,
    private fb: FormBuilder,
    private readonly cdRef: ChangeDetectorRef,
  ) {
    this.ngControl.valueAccessor = this;
    this.formGroup = this.fb.group({
      projectName: ['', [Validators.required, Validators.minLength(3)]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      teamSize: ['', [Validators.required]],
      techStack: ['', [Validators.required]],
      description: ['', [Validators.required]],
      responsibilities: ['', [Validators.required]],
      teamRoles: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.initControlValueChanges();
  }

  ngDoCheck(): void {
    if (this.formGroup.invalid) {
      this.ngControl.control.setErrors({ projectFormError: true });
    }

    if (this.ngControl.control?.touched) {
      markAllAsDirty(this.formGroup);
      this.cdRef.markForCheck();
    }
  }

  public writeValue(obj: { [key: string]: string }): void {
    this.formGroup.setValue(obj, { emitEvent: false });
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
    this.formGroup.valueChanges.pipe(untilDestroyed(this)).subscribe(value => {
      value.teamSize = Number(value.teamSize);
      this.onChange(value);
    });
  }
}
