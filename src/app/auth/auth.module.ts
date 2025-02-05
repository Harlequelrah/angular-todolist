import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';



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
    AuthRoutingModule
  ],
})
export class AuthModule { }
