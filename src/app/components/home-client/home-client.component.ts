import { Component } from '@angular/core';

@Component({
  selector: 'app-home-client',
  standalone: true,
  imports: [],
  templateUrl: './home-client.component.html',
  styleUrl: './home-client.component.scss'
})
export class HomeClientComponent {

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
