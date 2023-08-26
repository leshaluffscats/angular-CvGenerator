import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectAccessToken } from 'src/app/store/auth/auth.selector';

export const authGuard: CanMatchFn = () => {
  const store = inject(Store);

  return store
    .select(selectAccessToken)
    .pipe(map((token: string) => Boolean(token)));
};
