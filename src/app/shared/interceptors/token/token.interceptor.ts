import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, mergeMap, take } from 'rxjs';
import { AuthFacade } from 'src/app/store/auth/auth.facade';
import { AUTH } from '../../constants/routing-paths.consts';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private authFacade: AuthFacade,
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return this.authFacade.accessToken$.pipe(
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
