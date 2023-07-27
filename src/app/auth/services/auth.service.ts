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
  private user: any | null = null;
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
* @param response La respuesta de inicio de sesión que contiene el token y la informacion del usuario que se logueo.
*/
  saveLoginInfo(response: LoginReponse): void {
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response)); 

  }

  /**
   * Se usa para obtener la información del usuario que se encuentra almacenada en el localStorage
   */
  getUserInfo(): any | null {
    const userString = localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  }

  /**
* Obtiene el token de autenticación del almacenamiento local.
* @returns El token de autenticación o una cadena vacía si no está disponible.
*/
  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  /**
* Elimina el token de autenticación y la info del user del almacenamiento local.
*/
  public deleteTokenAndUser(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
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
* Cierra la sesión del usuario
* Ejecuta la función deleteTokenAndUser
* y redirige al usuario a la página de login.
*/
  public logout(): void {
    this.deleteTokenAndUser();
    this.router.navigateByUrl('/auth', {
      replaceUrl: true,
    });
  }
}
