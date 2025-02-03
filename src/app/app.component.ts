import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { filter, interval, map, Observable, tap} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NgIf,AsyncPipe],
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
