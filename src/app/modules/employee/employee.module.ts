import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { BaseTableComponent } from 'src/app/shared/components/base-table/base-table.component';
import { ProjectFormComponent } from 'src/app/shared/components/project-form/project-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { RealInfoComponent } from './components/real-info/real-info.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { VirtualCvComponent } from './components/virtual-cv/virtual-cv.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { EmployeeDataPageComponent } from './pages/employee-data-page/employee-data-page.component';
import { EmployeesListPageComponent } from './pages/employees-list-page/employees-list-page.component';

@NgModule({
  declarations: [
    EmployeesListPageComponent,
    RealInfoComponent,
    VirtualCvComponent,
    EmployeeFormComponent,
    EmployeeDataPageComponent,
    AddEmployeePageComponent,
    TabsComponent,
  ],
  imports: [
    ButtonModule,
    BaseTableComponent,
    CommonModule,
    EmployeeRoutingModule,
    TranslateModule,
    TabViewModule,
    ProjectFormComponent,
  ],
})
export class EmployeeModule {}
