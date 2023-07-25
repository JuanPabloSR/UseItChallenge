import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private snackBar: MatSnackBar
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

    console.log(loginInfo);
    this.handleLoginSuccess();
  }

  handleLoginSuccess(): void {
    this.isSubmitting = false;
    this.router.navigateByUrl('/users/list', { replaceUrl: true });
  }
}
