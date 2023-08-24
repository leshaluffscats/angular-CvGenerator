import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    // const accessToken = this.cookie.getCookie('access');

    const newReq = request.clone({
      // setHeaders: { Authorization: `Bearer ${accessToken}` },
    });

    return next.handle(newReq);
    // еще один интерсептор который будет получать access по refresh токену и делать запрос
    // в provide написать новый интерсептор и потом этот
  }
}
