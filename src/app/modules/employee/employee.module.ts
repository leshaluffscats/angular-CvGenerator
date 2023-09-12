import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { BaseTableComponent } from 'src/app/shared/components/base-table/base-table.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { ProjectFormComponent } from 'src/app/shared/components/project-form/project-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { VirtualCvComponent } from './components/virtual-cv/virtual-cv.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { EditEmployeePageComponent } from './pages/edit-employee-page/edit-employee-page.component';
import { EmployeesListPageComponent } from './pages/employees-list-page/employees-list-page.component';
import { SelectComponent } from 'src/app/shared/components/select/select.component';

@NgModule({
  declarations: [
    EmployeesListPageComponent,
    VirtualCvComponent,
    EmployeeFormComponent,
    EditEmployeePageComponent,
    AddEmployeePageComponent,
    TabsComponent,
    SidebarComponent,
  ],
  imports: [
    AccordionModule,
    ButtonModule,
    BaseTableComponent,
    CommonModule,
    EmployeeRoutingModule,
    TranslateModule,
    TabViewModule,
    ProjectFormComponent,
    ReactiveFormsModule,
    InputComponent,
    SelectComponent,
  ],
})
export class EmployeeModule {}
