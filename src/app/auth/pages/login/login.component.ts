import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  isSubmitting: boolean = false;
  errorRequest: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.resetFormLogin();
  }

  resetFormLogin(): void {
    this.formLogin.reset({
      username: '',
      password: '',
    });
  }

  isFieldInvalid(fieldName: string) {
    const field = this.formLogin.get(fieldName);
    return field?.invalid && field?.touched;
  }

  login(): void {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      return;
    }

    const loginInfo = this.formLogin.value;
    this.isSubmitting = true;

    this.authService.login(loginInfo).subscribe(
      () => {
        this.handleLoginSuccess();
      }, (error) => {
        this.handleLoginError(error);
      }
    )

  }

  handleLoginSuccess(): void {
    this.isSubmitting = false;
    this.router.navigateByUrl('/users/list', { replaceUrl: true });

    this.snackBar.open('Login success 👋', 'Close',{
      duration: 2000,
    })
  }

  handleLoginError(error: any): void {
    this.isSubmitting = false;
    this.errorRequest = 'Invalid username or password';
    this.snackBar.open(this.errorRequest, 'Close', {
      duration: 2000,
    });
  }
}
