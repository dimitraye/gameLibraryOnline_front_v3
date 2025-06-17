import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss'
})
export class HomeAdminComponent {

constructor(private router: Router) {}
  
  goToGames() {
    this.router.navigate(['/game-list']);
  }
  goToUserGames() {
    this.router.navigate(['/user-games']);
  }
  goToSuccess() {
    this.router.navigate(['/success-list']);
  }
  goToStatistics() {
    this.router.navigate(['/statistic']);
  }
  gotToProfile() {
    this.router.navigate(['/profile']);
  }
  gotToUsers() {
    this.router.navigate(['/user-list']);
  }

  successes = [
    { gameTitle: 'Jeu 1', title: 'Succès 1' },
    { gameTitle: 'Jeu 2', title: 'Succès 2' },
    // ...
  ];

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
