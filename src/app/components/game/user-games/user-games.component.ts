import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserGameService } from '../../../services/user-game-service.service';
import { UserGame } from '../../../models/user-game';

@Component({
  selector: 'app-user-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-games.component.html',
  styleUrl: './user-games.component.scss'
})
export class UserGamesComponent implements OnInit {
  userGames: UserGame[] = [];

  constructor(
    private userGameService: UserGameService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userGameService.getAll().subscribe({
      next: (data) => this.userGames = data,
      error: (err) => console.error('Erreur récupération jeux utilisateur :', err)
    });
  }

  goToUserGameForm(): void {
    this.router.navigate(['/home-client/user-game-form']);
  }

  goToUserGameDetails(userGameId: number | undefined): void {
    if (userGameId == null) {
      console.warn("ID du UserGame manquant, navigation annulée.");
      return;
    }

    this.router.navigate(['/home-client/user-game-details', userGameId]);
  }

}
