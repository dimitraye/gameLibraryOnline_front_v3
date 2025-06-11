import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { User } from './models/user.model';
import { AuthService } from './services/auth.service';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private router: Router,
    private sessionService: SessionService) {
  }
  title = 'game-library-front';


    ngOnInit() {
      if (this.authService.isLoggedIn()) {
        this.authService.me().subscribe({
          next: (user) => this.sessionService.logIn(user),
          error: (err) => {
            console.error('Erreur me() au démarrage :', err);
            this.sessionService.logOut();
          }
        });
      }
    }


  logout() {
    throw new Error('Method not implemented.');
  }




}
