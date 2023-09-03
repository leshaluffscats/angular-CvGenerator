import { createReducer, on } from '@ngrx/store';
import * as commonActions from './common.actions';

export interface ICommonInitialState {
  breadcrumbs: string[];
  isDark: boolean;
}

export const commonInitialState: ICommonInitialState = {
  breadcrumbs: null,
  isDark: false,
};

export const commonReducer = createReducer(
  commonInitialState,
  on(commonActions.changeTheme, state => ({
    ...state,
    isDark: !state.isDark,
  })),
);
