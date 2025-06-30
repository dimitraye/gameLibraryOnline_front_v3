import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const expectedRoles = route.data['roles'] as string[];

  const userRole = authService.getRole(); // récupéré du localStorage

  if (userRole && expectedRoles.includes(userRole)) {
    return true;
  }

  router.navigate(['/login']); // ou vers une page "403 - Interdit"
  return false;
};
