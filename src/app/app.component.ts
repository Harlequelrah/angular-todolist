import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { interval, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NgIf,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  showHeader: boolean = true;
  interval$! : Observable<number>;
  constructor(private router: Router) {
    this.router.events.subscribe(
      () => {
        this.showHeader = this.router.url !== '/' && this.router.url!=='/register';
      }
    )
  }
  ngOnInit(): void {
    this.interval$ = interval(1000);
  }
}
