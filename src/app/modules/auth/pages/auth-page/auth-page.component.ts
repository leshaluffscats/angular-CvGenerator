import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { markAllAsDirty } from 'src/app/shared/utils/mark-all-as-dirty.utils';
import { getAccessToken } from 'src/app/store/auth/auth.actions';
import { AuthFacade } from 'src/app/store/auth/auth.facade';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {
  public authForm: FormGroup;
  public error: string;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authFacade: AuthFacade,
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
    // this.authFacade.getAccessToken(this.authForm.getRawValue());
  }
}
