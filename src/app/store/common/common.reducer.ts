import { createReducer, on } from '@ngrx/store';
import * as commonActions from './common.actions';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { ITitle } from 'src/app/shared/interfaces/titles.interface';

export interface ICommonInitialState {
  breadcrumbs: IBreadCrumb[];
  isDark: boolean;
  titles: ITitle;
}

export const commonInitialState: ICommonInitialState = {
  breadcrumbs: null,
  isDark: false,
  titles: null,
};

export const commonReducer = createReducer(
  commonInitialState,
  on(commonActions.changeTheme, state => ({
    ...state,
    isDark: !state.isDark,
  })),

  on(commonActions.pushToBreadCrumbs, (state, { data: breadcrumbs }) => ({
    ...state,
    breadcrumbs,
  })),
  on(commonActions.setTitles, (state, { titles }) => ({
    ...state,
    titles,
  })),
);
