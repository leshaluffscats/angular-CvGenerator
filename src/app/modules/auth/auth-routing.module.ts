import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AUTH_PATH } from 'src/app/shared/constants/routing-paths.consts';

const routes: Routes = [{ path: AUTH_PATH.path, component: AuthPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
