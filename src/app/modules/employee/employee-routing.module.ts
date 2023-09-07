import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  EMPLOYEE_LIST_PATH,
  ID_PATH,
} from 'src/app/shared/constants/routing-paths.consts';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { EmployeesListPageComponent } from './pages/employees-list-page/employees-list-page.component';
import { EditEmployeePageComponent } from './pages/edit-employee-page/edit-employee-page.component';

const routes: Routes = [
  { path: EMPLOYEE_LIST_PATH.path, component: EmployeesListPageComponent },
  { path: ADD_EMPLOYEE.path, component: AddEmployeePageComponent },
  {
    path: EDIT_EMPLOYEE.path + ID_PATH.fullPath,
    component: EditEmployeePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
