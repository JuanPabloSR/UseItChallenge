import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Login } from 'src/app/interfaces/login-interface';
import { LoginReponse } from 'src/app/interfaces/login-response-interface';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.URL_API;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  /**
* Realiza una solicitud de inicio de sesión.
* @param loginInfo La información de inicio de sesión.
* @returns Un Observable que emite la respuesta de inicio de sesión.
*/
  login(loginInfo: Login): Observable<LoginReponse> {
    const loginUrl = `${BASE_URL}/auth/login`;
    return this.http
      .post<LoginReponse>(loginUrl, loginInfo)
      .pipe(tap((response) => this.saveLoginInfo(response)));
  }

  /**
* Guarda la información de inicio de sesión en el almacenamiento local.
* @param response La respuesta de inicio de sesión que contiene el token.
*/
  saveLoginInfo(response: LoginReponse): void {
    const { token } = response;
    localStorage.setItem('token', token);
  }

  /**
* Obtiene el token de autenticación del almacenamiento local.
* @returns El token de autenticación o una cadena vacía si no está disponible.
*/
  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  /**
* Elimina el token de autenticación del almacenamiento local.
*/
  public deleteToken(): void {
    localStorage.removeItem('token');
  }

  /**
* Verifica si el usuario está autenticado.
* @returns Un valor booleano que indica si el usuario está autenticado.
*/
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  /**
* Cierra la sesión del usuario.
* Elimina el token de autenticación del almacenamiento local,
* y redirige al usuario a la página de login.
*/
  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth', {
      replaceUrl: true,
    });
  }
}
