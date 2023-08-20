import { AbstractControl, FormGroup } from '@angular/forms';

export const markAllAsDirty = (form: FormGroup) => {
  Object.values(form.controls).forEach((control: AbstractControl) => {
    control.markAsDirty();
  });
};
