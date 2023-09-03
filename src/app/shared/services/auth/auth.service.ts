import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH, PROJECTS } from '../../constants/routing-paths.consts';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { selectAccessToken } from 'src/app/store/auth/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessToken: string;

  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) {
    this.store.select(selectAccessToken).subscribe(accessToken => {
      this.accessToken = accessToken;
    });
  }

  public submitAuth(): void {
    this.router.navigate([PROJECTS.path]);
  }

  public logOut(): void {
    // todo еще обнулить токены
    this.router.navigate([AUTH.path]);
  }

  public isAuthenticated(): boolean {
    return !!this.accessToken;
  }
}
