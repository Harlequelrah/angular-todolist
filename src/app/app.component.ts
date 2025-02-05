import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showHeader: boolean = true;
  interval$! : Observable<string>;
  constructor(private router: Router) {
    this.router.events.subscribe(
      () => {
        this.showHeader = this.router.url !== '/' && this.router.url!=='/register';
      }
    )
  }

}
