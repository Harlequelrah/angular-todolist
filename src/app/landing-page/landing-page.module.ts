import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LandingPageComponent
  ],

})
export class LandingPageModule { }
