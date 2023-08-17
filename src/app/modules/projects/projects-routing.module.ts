import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListPageComponent } from './pages/project-list-page/project-list-page.component';
import { EditProjectPageComponent } from './pages/edit-project-page/edit-project-page.component';
import { AddProjectPageComponent } from './pages/add-project-page/add-project-page.component';
import {
  ADD_PROJECT,
  EDIT_PROJECT,
} from 'src/app/shared/constants/routing-paths.consts';

const routes: Routes = [
  { path: '', component: ProjectListPageComponent }, //пустой путь сделать константой (path = fullPath)
  { path: EDIT_PROJECT.path, component: EditProjectPageComponent },
  { path: ADD_PROJECT.path, component: AddProjectPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
