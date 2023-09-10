import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { HeaderComponent } from './components/header/header.component';
import { PageTitlesComponent } from './components/page-titles/page-titles.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './page/core-page/core-page.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    CorePageComponent,
    HeaderComponent,
    SidebarComponent,
    PageTitlesComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    ButtonModule,
    CommonModule,
    CoreRoutingModule,
    ToggleButtonModule,
    TranslateModule,
  ],
})
export class CoreModule {}
