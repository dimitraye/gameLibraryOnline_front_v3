import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { MeComponent } from './components/auth/me/me.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { HomeClientComponent } from './components/home/home-client/home-client.component';
import { HomeAdminComponent } from './components/home/home-admin/home-admin.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';

import { GameListComponent } from './components/game/game-list/game-list.component';
import { GameDetailsComponent } from './components/game/game-details/game-details.component';
import { GameFormComponent } from './components/game/game-form/game-form.component';
import { UserGamesComponent } from './components/game/user-games/user-games.component';

import { SuccessListComponent } from './components/success/success-list/success-list.component';
import { SuccessFormComponent } from './components/success/success-form/success-form.component';
import { SuccessDetailsComponent } from './components/success/success-details/success-details.component';

import { CommentaryListComponent } from './components/commentary/commentary-list/commentary-list.component';
import { CommentaryFormComponent } from './components/commentary/commentary-form/commentary-form.component';
import { CommentaryDetailsComponent } from './components/commentary/commentary-details/commentary-details.component';

import { StatisticsComponent } from './components/statistic/statistics/statistics.component';
import { ProfileComponent } from './components/profile/profile.component';

import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';

import { authGuard } from './guards/auth.guard';
import { unauthGuard } from './guards/unauth-guard';

export const routes: Routes = [
  // Auth
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [unauthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [unauthGuard] },
  { path: 'me', component: MeComponent, canActivate: [authGuard] },

  // Page d’accueil principale
  { path: 'home', component: HomePageComponent, canActivate: [authGuard] },

  // Client
  {
    path: 'home-client',
    component: HomeClientComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },

      { path: 'games', component: GameListComponent },
      { path: 'game-details/:id', component: GameDetailsComponent },
      { path: 'game-form', component: GameFormComponent },
      { path: 'user-games', component: UserGamesComponent },

      { path: 'success', component: SuccessListComponent },
      { path: 'success-details/:id', component: SuccessDetailsComponent },
      { path: 'success-form/:id', component: SuccessFormComponent },

      { path: 'commentary', component: CommentaryListComponent },
      { path: 'commentary-details/:id', component: CommentaryDetailsComponent },
      { path: 'commentary-form/:id', component: CommentaryFormComponent },

      { path: 'statistics', component: StatisticsComponent },

      { path: 'profile', component: ProfileComponent },

      { path: 'user-list', component: UserListComponent },
      { path: 'user-details/:id', component: UserDetailsComponent },
      { path: 'user-form/:id', component: UserFormComponent },
    ]
  },

  // Admin
  {
    path: 'home-admin',
    component: HomeAdminComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },

      { path: 'games', component: GameListComponent },
      { path: 'game-details/:id', component: GameDetailsComponent },
      { path: 'game-form', component: GameFormComponent },
      { path: 'user-games', component: UserGamesComponent },

      { path: 'success', component: SuccessListComponent },
      { path: 'success-details/:id', component: SuccessDetailsComponent },
      { path: 'success-form/:id', component: SuccessFormComponent },

      { path: 'commentary', component: CommentaryListComponent },
      { path: 'commentary-details/:id', component: CommentaryDetailsComponent },
      { path: 'commentary-form/:id', component: CommentaryFormComponent },

      { path: 'statistics', component: StatisticsComponent },

      { path: 'profile', component: ProfileComponent },

      { path: 'user-list', component: UserListComponent },
      { path: 'user-details/:id', component: UserDetailsComponent },
      { path: 'user-form/:id', component: UserFormComponent },
    ]
  },

  // Fallback route
  { path: '**', redirectTo: 'login' }
];
