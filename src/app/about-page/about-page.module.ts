import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './components/about-page.component';



@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule
  ],
  exports: [AboutPageComponent],

})
export class AboutPageModule { }
