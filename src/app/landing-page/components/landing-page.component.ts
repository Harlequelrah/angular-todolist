import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private router:Router,private auth :AuthService){}
  logout(): void{
    this.auth.logout();
    this.router.navigateByUrl("/");

  }

}
