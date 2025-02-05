import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './registration-page.component.html',
  styleUrl: '../../styles/form-style.scss'
})
export class RegistrationPageComponent implements OnInit{

  registerForm!: FormGroup;
  constructor(private auth:AuthService,  private router:Router,private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required,Validators.email]],
        password: ['', Validators.minLength(8)],
        username :['',Validators.required]
      }
    )

  }
  onSubmitRegisterForm():void {
    this.auth.register(this.registerForm.value).pipe(
      tap(
        () =>
        {
          this.router.navigateByUrl("/accueil");
        }
      )
    ).subscribe();
  }

}
