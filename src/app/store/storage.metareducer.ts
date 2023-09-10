/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionReducer, MetaReducer } from '@ngrx/store';
import { merge, pick } from 'lodash-es';
import { inject } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage/local-storage.service';

export function storageMetaReducer(
  reducer: ActionReducer<any>,
): ActionReducer<any> {
  //ActionReducer это функция которая принимает state и action  возвращает state
  const ls = inject(LocalStorageService);

  let onInit = true;

  return (state, action) => {
    const nextState = reducer(state, action);

    if (onInit) {
      // При перезагрузке мы достаем state из localStorage и сохраняем его в state ngRx
      onInit = false;
      const savedState = ls.getItem('auth');
      return merge(nextState, savedState);
    }
    // из state берем auth и устанавливаем в localStorage
    const stateToSave = pick(nextState, ['auth']);
    ls.setItem('auth', stateToSave);
    return nextState;
  };
}

export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];
