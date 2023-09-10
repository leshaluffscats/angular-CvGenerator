import { createAction, props } from '@ngrx/store';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';

export const changeTheme = createAction('[Theme] Change theme');

export const pushToBreadCrumbs = createAction(
  '[Breadcrumbs] Push to breadcrumbs',
  props<{ data: IBreadCrumb[] }>(),
);
