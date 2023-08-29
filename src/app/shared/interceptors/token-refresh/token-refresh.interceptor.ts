import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/store/auth/auth.facade';
import { API_AUTH_URL } from '../../constants/api.consts';
import { AuthApiService } from '../../services/api/auth/auth.api.service';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class TokenRefreshInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private authFacade: AuthFacade,
    private authApi: AuthApiService,
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    if (
      request.url.includes(`${API_AUTH_URL}`) ||
      request.url.includes('i18n')
    ) {
      console.log('second interceptor');
      return next.handle(request);
    }
    return next.handle(request);
  }
}
