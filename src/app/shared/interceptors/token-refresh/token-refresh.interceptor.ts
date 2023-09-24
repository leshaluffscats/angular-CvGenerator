import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, mergeMap, take } from 'rxjs';
import { AuthFacade } from 'src/app/store/auth/auth.facade';
import { IAuthInitialState } from 'src/app/store/auth/auth.reducer';
import { API_AUTH_URL } from '../../constants/api.consts';
import { IJwt } from '../../interfaces/auth-api.interface';
import { AuthApiService } from '../../services/api/auth/auth.api.service';

@Injectable()
export class TokenRefreshInterceptor implements HttpInterceptor {
  constructor(
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
      return next.handle(request);
    }
    return this.authFacade.tokenData$.pipe(
      filter(Boolean),
      take(1),
      mergeMap((tokenData: IAuthInitialState) => {
        if (tokenData.expires < Date.now()) {
          return this.authApi.refreshToken().pipe(
            mergeMap((tokens: IJwt) => {
              this.authFacade.updateToken(tokens.access_token);
              return next.handle(
                request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${tokens.access_token}`,
                  },
                }),
              );
            }),
          );
        }

        return next.handle(request);
      }),
    );
  }
}
