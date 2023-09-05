import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { HeaderComponent } from './components/header/header.component';
import { PageTitlesComponent } from './components/page-titles/page-titles.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './page/core-page/core-page.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    PageTitlesComponent,
    CorePageComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ToggleButtonModule,
    TranslateModule,
  ],
})
export class CoreModule {}
