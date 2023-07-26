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
  constructor(private http: HttpClient, private router: Router) {}

  login(loginInfo: Login): Observable<LoginReponse> {
    const loginUrl = `${BASE_URL}/auth/login`;
    return this.http
      .post<LoginReponse>(loginUrl, loginInfo)
      .pipe(tap((response) => this.saveLoginInfo(response)));
  }

  saveLoginInfo(response: LoginReponse): void {
    const { token } = response;
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  public deleteToken(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth', {
      replaceUrl: true,
    });
  }
}
