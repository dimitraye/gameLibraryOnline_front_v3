import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SuccessSidebarComponent } from '../../success/success-sidebar/success-sidebar.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [RouterOutlet, SuccessSidebarComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss'
})
export class HomeAdminComponent {
 constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {}
  
  goToGames() {
    this.router.navigate(['games'], { relativeTo: this.route });
  }

  goToUserGames() {
    this.router.navigate(['user-games'], { relativeTo: this.route });
  }

  goToSuccess() {
    this.router.navigate(['success'], { relativeTo: this.route });
  }

  goToStatistics() {
    this.router.navigate(['statistics'], { relativeTo: this.route });
  }

  gotToUsers() {
    this.router.navigate(['user-list'], { relativeTo: this.route });
  }

  goToProfile() {
    this.router.navigate(['profile'], { relativeTo: this.route });
  }


  goToHomeAdmin() {
    this.router.navigate(['/home-admin/dashboard']);
  }

  logOut() {
    this.authService.logout();              // supprime le token + rôle
    this.router.navigate(['/login']);
  }

  otherGames = [
    { image: 'url1.jpg' },
    { image: 'url2.jpg' },
    // ...
  ];

  myGames = [
    { image: 'url3.jpg', title: 'Mon Jeu 1', progress: 75, info: 'Temps joué : 20h' },
    // ...
  ];

  stats = [
    { label: 'Total jeux', value: 12 },
    { label: 'Succès débloqués', value: 34 },
    { label: 'Temps de jeu', value: '120h' },
  ];


}
