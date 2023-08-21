import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
// import { StyleClassModule } from 'primeng/styleclass';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InputTextModule,
    ButtonModule,
    InputComponent,
    ReactiveFormsModule,
    // StyleClassModule,
  ],
})
export class AuthModule {}
