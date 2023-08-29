import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { TokenInterceptor } from './token/token.interceptor';
import { TokenRefreshInterceptor } from './token-refresh/token-refresh.interceptor';

export const httpInterceptorProviders: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenRefreshInterceptor,
    multi: true,
  },
];
