import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LOCALE_ID, NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { LandingPageModule } from './landing-page/landing-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AuthModule,
    AppRoutingModule,
    LandingPageModule,
    CoreModule,
    RouterOutlet
  ],
  bootstrap: [AppComponent],
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: LOCALE_ID, useValue: 'fr-FR'
    },

  ]

})
export class AppModule { }
