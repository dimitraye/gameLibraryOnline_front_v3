import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SuccessSidebarComponent } from '../../success/success-sidebar/success-sidebar.component';

@Component({
  selector: 'app-home-client',
  standalone: true,
  imports: [RouterOutlet, SuccessSidebarComponent],
  templateUrl: './home-client.component.html',
  styleUrl: './home-client.component.scss'
})
export class HomeClientComponent {
goToDisconnect() {
throw new Error('Method not implemented.');
}
   constructor(private router: Router, private route: ActivatedRoute) {}
  
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

  goToProfile() {
    this.router.navigate(['profile'], { relativeTo: this.route });
  }

  goToHomeClient() {
    this.router.navigate(['/home-client/dashboard']);
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
