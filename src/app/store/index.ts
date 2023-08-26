// собрать все редьюсеры и т.д

import { IAuthInitialState } from './auth/auth.reducer';

export interface AppState {
  auth: IAuthInitialState;
}
