import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorePageComponent } from './page/core-page/core-page.component';
import {
  CORE_PATH,
  EMPLOYEES,
  PROJECTS,
} from 'src/app/shared/constants/routing-paths.consts';

const routes: Routes = [
  {
    path: CORE_PATH.path,
    component: CorePageComponent,
    children: [
      {
        path: EMPLOYEES.path,
        loadChildren: () =>
          import('../employee/employee.module').then(m => m.EmployeeModule),
      },
      {
        path: PROJECTS.path,
        loadChildren: () =>
          import('../projects/projects.module').then(m => m.ProjectsModule),
      },
      { path: '**', redirectTo: PROJECTS.path },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
