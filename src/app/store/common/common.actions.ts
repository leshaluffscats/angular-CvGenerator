import { createAction, props } from '@ngrx/store';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { ITitle } from 'src/app/shared/interfaces/titles.interface';

export const changeTheme = createAction('[Theme] Change theme');

export const pushToBreadCrumbs = createAction(
  '[Breadcrumbs] Push to breadcrumbs',
  props<{ data: IBreadCrumb[] }>(),
);
export const setTitles = createAction(
  '[Titles] Set titles',
  props<{ titles: ITitle }>(),
);
