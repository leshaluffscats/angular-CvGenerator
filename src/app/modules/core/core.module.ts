import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageTitlesComponent } from './components/page-titles/page-titles.component';
import { CorePageComponent } from './page/core-page/core-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    PageTitlesComponent,
    CorePageComponent,
  ],
  imports: [CommonModule, CoreRoutingModule],
  // exports: [CorePageComponent],
})
export class CoreModule {}
