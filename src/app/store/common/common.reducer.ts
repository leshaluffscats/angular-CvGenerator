import { createReducer, on } from '@ngrx/store';
import * as commonActions from './common.actions';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';

export interface ICommonInitialState {
  breadcrumbs: IBreadCrumb[];
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

  // todo переименовать дату
  on(commonActions.pushToBreadCrumbs, (state, { data }) => ({
    ...state,
    breadcrumbs: data,
  })),
);
