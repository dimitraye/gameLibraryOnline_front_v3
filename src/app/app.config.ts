import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';
//import { tokenInterceptor } from './components/auth/interceptors/token.interceptor';
import { authInterceptorFn } from './components/auth/interceptors/token.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptorFn])),
    provideAnimations(),
    importProvidersFrom(FormsModule, ReactiveFormsModule), provideAnimationsAsync()
  ]
};
