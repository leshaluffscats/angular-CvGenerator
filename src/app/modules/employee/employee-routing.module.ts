import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ADD_EMPLOYEE,
  EMPLOYEE_LIST_PATH,
} from 'src/app/shared/constants/routing-paths.consts';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { EmployeesListPageComponent } from './pages/employees-list-page/employees-list-page.component';

const routes: Routes = [
  { path: EMPLOYEE_LIST_PATH.path, component: EmployeesListPageComponent },
  { path: ADD_EMPLOYEE.path, component: AddEmployeePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
