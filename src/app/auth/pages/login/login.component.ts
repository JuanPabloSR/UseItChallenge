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

  /**
   * Reinicia el formulario de inicio de sesión estableciendo los valores de los campos en blanco.
   */
  resetFormLogin(): void {
    this.formLogin.reset({
      username: '',
      password: '',
    });
  }

  /**
 * Verifica si un campo del formulario es inválido.
 * @param fieldName El nombre del campo del formulario.
 * @returns Un valor booleano que indica si el campo es inválido.
 */
  isFieldInvalid(fieldName: string) {
    const field = this.formLogin.get(fieldName);
    return field?.invalid && field?.touched;
  }

  /**
* Realiza la acción de inicio de sesión.
* Si el formulario es válido, envía la solicitud de inicio de sesión al servicio de autenticación.
* Si se produce un error, muestra un mensaje de error en el snackbar.
*/
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

  /**
* Maneja el éxito del inicio de sesión.
* Restablece el estado del formulario y redirige al usuario a la página de destino.
*/
  handleLoginSuccess(): void {
    this.isSubmitting = false;
    this.router.navigateByUrl('/users/list', { replaceUrl: true });

    this.snackBar.open('Login success', 'Close', {
      panelClass: ['snackbar-custom'],
      duration: 4000,
    })
  }

  /**
   * Maneja el error del inicio de sesión.
   * Muestra un mensaje de error en el snackbar y restablece el estado del formulario.
   * @param error El objeto de error recibido.
   */
  handleLoginError(error: any): void {
    this.isSubmitting = false;
    this.errorRequest = 'Invalid username or password';
    this.snackBar.open(this.errorRequest, 'Close', {
      panelClass: ['snackbar-custom'],
      duration: 2000,
    });
  }
}
