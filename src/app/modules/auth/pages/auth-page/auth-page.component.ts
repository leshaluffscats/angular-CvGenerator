import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { markAllAsDirty } from 'src/app/shared/utils/mark-all-as-dirty.utils';
import { getAccessToken } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {
  public authForm: FormGroup;
  public error: string;
  public isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public login() {
    if (this.authForm.invalid) {
      markAllAsDirty(this.authForm);
      return;
    }

    this.store.dispatch(getAccessToken(this.authForm.getRawValue()));
  }
}
