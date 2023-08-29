import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter, mergeMap, take } from 'rxjs';
import { AppState } from 'src/app/store';
import { AuthFacade } from 'src/app/store/auth/auth.facade';
import { IAuthInitialState } from 'src/app/store/auth/auth.reducer';
import { API_AUTH_URL } from '../../constants/api.consts';
import { IJwt } from '../../interfaces/auth-api.interface';
import { AuthApiService } from '../../services/api/auth/auth.api.service';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class TokenRefreshInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private authFacade: AuthFacade,
    private authApi: AuthApiService,
    private store: Store<AppState>,
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
