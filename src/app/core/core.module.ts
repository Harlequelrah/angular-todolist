import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NotfoundComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NotfoundComponent
  ],
  providers: [
    ...httpInterceptorProviders,
  ]
})
export class CoreModule { }
