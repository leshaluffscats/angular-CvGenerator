import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeePageComponent } from './pages/edit-employee-page/edit-employee-page.component';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { EmployeesListPageComponent } from './pages/employees-list-page/employees-list-page.component';
import {
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
} from 'src/app/shared/constants/routing-paths.consts';

const routes: Routes = [
  { path: '', component: EmployeesListPageComponent },
  { path: EDIT_EMPLOYEE.path, component: EditEmployeePageComponent },
  { path: ADD_EMPLOYEE.path, component: AddEmployeePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
