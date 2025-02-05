import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { TodosModule } from './todos/todos.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingPageModule,
    TodosModule,
    CoreModule,
  ],
  providers: [
    NgIf
  ]


})
export class AppModule { }
