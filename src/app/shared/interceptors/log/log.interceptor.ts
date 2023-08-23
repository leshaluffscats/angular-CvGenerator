import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    let message: string;

    return next.handle(request).pipe(
      tap({
        next: event =>
          (message = event instanceof HttpResponse ? 'succeeded' : ''),
        error: () => (message = 'failed'),
      }),
      finalize(() => console.log(message)),
    );
  }
}
