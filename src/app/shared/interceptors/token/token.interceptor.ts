import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, mergeMap, take } from 'rxjs';
import { AppState } from 'src/app/store';
import { selectAccessToken } from 'src/app/store/auth/auth.selector';
import { AUTH } from '../../constants/routing-paths.consts';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return this.store.select(selectAccessToken).pipe(
      take(1),
      mergeMap((accessToken: string) => {
        if (!accessToken) {
          this.router.navigate([AUTH.path]);
          return next.handle(request);
        }
        const newReq = request.clone({
          setHeaders: { Authorization: `Bearer ${accessToken}` },
        });
        return next.handle(newReq);
      }),
    );
  }
}
