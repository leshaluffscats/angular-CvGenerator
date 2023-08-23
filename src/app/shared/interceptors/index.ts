import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInterceptor } from './log/log.interceptor';
import { Provider } from '@angular/core';
import { TokenInterceptor } from './token/token.interceptor';

export const httpInterceptorProviders: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LogInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
];
