import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { authGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/auth/register/register.component';
import { unauthGuard } from './guards/unauth-guard';
import { MeComponent } from './components/auth/me/me.component';
import { HomeClientComponent } from './components/home-client/home-client.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';


export const routes: Routes = [  // <-- ajoute `export` ici
  { path: 'login', component: LoginComponent, canActivate: [unauthGuard] },
  { path: 'home', component: HomePageComponent, canActivate: [authGuard] },
  { path: 'home-client', component: HomeClientComponent, canActivate: [authGuard] },
  { path: 'home-admin', component: HomeAdminComponent, canActivate: [authGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, canActivate: [unauthGuard]  },
  { path: 'me', component: MeComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];
