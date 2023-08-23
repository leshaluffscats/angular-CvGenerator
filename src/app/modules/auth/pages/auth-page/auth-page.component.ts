import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PROJECTS } from 'src/app/shared/constants/routing-paths.consts';
import { IJwt } from 'src/app/shared/interfaces/api.interface';
import { AuthApiService } from 'src/app/shared/services/api/auth/auth.api.service';
import { CookieService } from 'src/app/shared/services/cookie/cookie.service';
import { parseJwt } from 'src/app/shared/utils/parse-jwt';

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
    private auth: AuthApiService,
    private cookie: CookieService,
    private router: Router,
  ) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public login() {
    this.auth.login(this.authForm.getRawValue()).subscribe({
      next: (tokens: IJwt) => {
        parseJwt(tokens.access_token);
        this.cookie.setCookie('access', tokens.access_token);
        this.router.navigate([PROJECTS.path]); //перенести в auth service который не api
      },
      error: err => (this.error = err.message),
    });
  }
}
