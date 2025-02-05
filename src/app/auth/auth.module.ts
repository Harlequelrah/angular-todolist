import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';



@NgModule({
  declarations: [
    RegistrationPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    AuthRoutingModule
  ],
  exports: [
    RegistrationPageComponent,
    LoginPageComponent,
  ],
})
export class AuthModule { }
