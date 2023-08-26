import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { EditEmployeePageComponent } from './pages/edit-employee-page/edit-employee-page.component';
import { EmployeesListPageComponent } from './pages/employees-list-page/employees-list-page.component';
import { EmployeeDataComponent } from './components/employee-data/employee-data.component';
import { RealInfoComponent } from './components/real-info/real-info.component';
import { VirtualCvComponent } from './components/virtual-cv/virtual-cv.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ButtonModule } from 'primeng/button';
import { ProjectFormComponent } from 'src/app/shared/components/project-form/project-form.component';
import { BaseTable2Component } from 'src/app/shared/components/base-table2/base-table2.component';
import { BaseTableComponent } from 'src/app/shared/components/base-table/base-table.component';

@NgModule({
  declarations: [
    AddEmployeePageComponent,
    EditEmployeePageComponent,
    EmployeesListPageComponent,
    EmployeeDataComponent,
    RealInfoComponent,
    VirtualCvComponent,
    EmployeeFormComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ButtonModule,
    ProjectFormComponent,
    BaseTable2Component,
    BaseTableComponent,
  ],
  // exports: [EmployeesListPageComponent],
})
export class EmployeeModule {}
