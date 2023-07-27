import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Guard usado para la protección de rutas
 * Se encarga de verificar si el usuario se encuentra autenticado correctamente consultando al servicio
 * el cual devuelve un booleano si existe o no un token almacenado en el localStorage.
 */

export const authGuard: CanMatchFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isAuthenticated()) {
    router.navigate(['/auth/login']);
    return false;
  }
  return true;
};

export const notAuthGuard: CanMatchFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    router.navigate(['/users/list']);
    return false;
  }
  return true;
};
