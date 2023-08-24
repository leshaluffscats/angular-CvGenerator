import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { AuthFacade } from 'src/app/store/auth/auth.facade';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private authFacade: AuthFacade,
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    if (!this.auth.isAuthenticated()) {
      // this.authFacade.refreshToken();
      // return EMPTY;
    }
    return next.handle(request);
  }
}
