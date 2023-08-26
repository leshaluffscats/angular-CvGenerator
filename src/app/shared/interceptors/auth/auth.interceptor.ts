import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/store/auth/auth.facade';
import { AuthService } from '../../services/auth/auth.service';

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
    // if (!this.auth.isAuthenticated()) {
    //   this.authFacade.refreshToken();
    //   return EMPTY;
    // }
    return next.handle(request);
  }
}
