import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: '../../styles/form-style.scss'
})
export class LoginPageComponent implements OnInit{
  loginForm!:FormGroup
  constructor(private router:Router,  private authService:AuthService,  private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    });
  }
  onSubmitLoginForm(): void{
    this.authService.login(this.loginForm.value).pipe(
      tap(
        () => {
          this.router.navigateByUrl("/accueil");
      }
    )
    ).subscribe();

  }


}
