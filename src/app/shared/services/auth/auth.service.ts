import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH, PROJECTS } from '../../constants/routing-paths.consts';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  public submitAuth(): void {
    this.router.navigate([PROJECTS.path]);
  }

  public logOut(): void {
    this.router.navigate([AUTH.path]);
  }

  public isAuthenticated(): boolean {
    return false;
  }
}
