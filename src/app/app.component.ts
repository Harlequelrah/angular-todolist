import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showHeader: boolean = true;
  constructor(private router: Router) {
    this.router.events.subscribe(
      () => {
        this.showHeader = this.router.url !== '/' && this.router.url!=='/register';
      }
    )
  }
}
