import { ChangeDetectorRef, Directive, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Directive({
  selector: '[appBaseInput]',
})
export class BaseInputClass implements ControlValueAccessor, OnInit {
  public control: FormControl = new FormControl('');

  constructor(
    protected readonly cdRef: ChangeDetectorRef,
    protected ngControl: NgControl,
  ) {
    this.ngControl.valueAccessor = this;
    if (this.ngControl.control?.parent) {
      this.control.setParent(this.ngControl.control?.parent);
    }
  }

  ngOnInit(): void {
    this.initControlValueChanges();
    this.initErrors();
  }

  ngDoCheck(): void {
    if (this.ngControl.control?.errors !== this.control.errors) {
      this.initErrors();
    }
    if (this.ngControl.control?.dirty) {
      this.control.markAsDirty();
      this.cdRef.markForCheck();
    } else {
      this.control.markAsPristine();
    }
  }

  public writeValue(value: string): void {
    this.control.setValue(value, { emitEvent: false });
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

  protected initErrors(): void {
    this.control.setErrors(this.ngControl.control!.errors);
  }

  protected initControlValueChanges(): void {
    this.control.valueChanges.subscribe(value => {
      this.onChange(value);
    });
  }
}
