import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TabViewModule } from 'primeng/tabview';
import { BaseTableComponent } from 'src/app/shared/components/base-table/base-table.component';
import { ChipsComponent } from 'src/app/shared/components/chips/chips.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { ProjectFormComponent } from 'src/app/shared/components/project-form/project-form.component';
import { SelectComponent } from 'src/app/shared/components/select/select.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { VirtualCvComponent } from './components/virtual-cv/virtual-cv.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { CvPdfPageComponent } from './pages/cv-pdf-page/cv-pdf-page.component';
import { EditEmployeePageComponent } from './pages/edit-employee-page/edit-employee-page.component';
import { EmployeesListPageComponent } from './pages/employees-list-page/employees-list-page.component';

@NgModule({
  declarations: [
    EmployeesListPageComponent,
    VirtualCvComponent,
    EmployeeFormComponent,
    EditEmployeePageComponent,
    AddEmployeePageComponent,
    TabsComponent,
    SidebarComponent,
    CvPdfPageComponent,
  ],
  imports: [
    AccordionModule,
    ButtonModule,
    BaseTableComponent,
    CommonModule,
    ChipsComponent,
    DividerModule,
    EmployeeRoutingModule,
    TranslateModule,
    TabViewModule,
    ProjectFormComponent,
    ReactiveFormsModule,
    InputComponent,
    SelectComponent,
    ProgressSpinnerModule,
  ],
})
export class EmployeeModule {}
