/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionReducer, MetaReducer } from '@ngrx/store';
import { merge, pick } from 'lodash-es';
import { inject } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage/local-storage.service';

export function storageMetaReducer(
  reducer: ActionReducer<any>,
): ActionReducer<any> {
  const ls = inject(LocalStorageService);

  let onInit = true;

  return (state, action) => {
    const nextState = reducer(state, action);

    if (onInit) {
      onInit = false;
      const savedState = ls.getItem('auth');
      return merge(nextState, savedState);
    }

    const stateToSave = pick(nextState, ['auth']);
    ls.setItem('auth', stateToSave);
    return nextState;
  };
}

export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];
