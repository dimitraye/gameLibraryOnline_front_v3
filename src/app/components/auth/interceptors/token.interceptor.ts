/*import { inject } from '@angular/core';
import { HttpEvent, HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  if (token) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(cloned);
  }

  return next(req);
};*/


// Type Angular qui définit un intercepteur HTTP fonctionnel (Angular 15+)
import { HttpInterceptorFn } from '@angular/common/http';

// Permet d'injecter des services dans un contexte fonctionnel (sans classe)
import { inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

// Service d’authentification qui contient le token JWT

// authInterceptorFn est une fonction d’interception HTTP.
// Elle est appelée automatiquement à chaque requête HTTP sortante.
// req est la requête originale, next est ce qui permet de continuer la chaîne des appels.
export const authInterceptorFn: HttpInterceptorFn = (req, next) => {
 const authService = inject(AuthService); // Injecte dynamiquement le service d’auth
  const token = authService.getToken(); 
  
  console.log("Interceptor token récupéré : ", token);
  // Récupère le token stocké (localStorage ou mémoire)
// inject(AuthService) permet d’utiliser un service même dans une fonction (sans constructeur)

// getToken() est une méthode dans AuthService qui retourne le token JWT actuel
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }
// req.clone() : en Angular, les requêtes sont immutables, donc on doit les cloner pour les modifier

// Le token est envoyé dans l’en-tête : Authorization: Bearer ey....
// Une donnée immuable (ou immutable en anglais) est une donnée que l'on ne peut pas modifier directement une fois qu'elle a été créée.

// 👉 Au lieu de modifier l’objet, on en crée une copie modifiée.

// 📦 En Angular, les requêtes HTTP (HttpRequest) sont immuables
// Cela veut dire que :

// On ne peut pas changer leurs propriétés (headers, URL, corps…) directement

// Pour les modifier, on doit en faire une copie avec .clone()
  return next(req);   //  Sinon, on laisse passer la requête originale sans ajout d'en-tête
};
