import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH, CORE_PATH } from './shared/constants/routing-paths.consts';

const routes: Routes = [
  {
    path: AUTH.path,
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: CORE_PATH.path,
    loadChildren: () =>
      import('./modules/core/core.module').then(m => m.CoreModule),
  },
  { path: '**', redirectTo: CORE_PATH.path },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
