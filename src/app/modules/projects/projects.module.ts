import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListPageComponent } from './pages/project-list-page/project-list-page.component';
import { AddProjectPageComponent } from './pages/add-project-page/add-project-page.component';
import { EditProjectPageComponent } from './pages/edit-project-page/edit-project-page.component';
import { ProjectFormComponent } from 'src/app/shared/components/project-form/project-form.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { DatepickerComponent } from 'src/app/shared/components/datepicker/datepicker.component';
import { BaseTableComponent } from 'src/app/shared/components/base-table/base-table.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ProjectListPageComponent,
    AddProjectPageComponent,
    EditProjectPageComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ProjectFormComponent,
    ButtonModule,
    ReactiveFormsModule,
    InputComponent,
    DatepickerComponent,
    BaseTableComponent,
    TranslateModule,
  ],
  // exports: [ProjectListPageComponent],
})
export class ProjectsModule {}
