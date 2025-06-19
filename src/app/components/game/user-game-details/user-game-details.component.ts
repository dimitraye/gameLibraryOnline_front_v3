import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserGameService } from '../../../services/user-game-service.service';
import { UserGame } from '../../../models/user-game';
import { GameStatus } from '../../../models/game-status';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-game-details',
  templateUrl: './user-game-details.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./user-game-details.component.scss']
})
export class UserGameDetailsComponent implements OnInit {
  userGame!: UserGame;
  userGameId!: number;

  constructor(
    private route: ActivatedRoute,
    private userGameService: UserGameService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userGameId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.userGameId) {
      this.userGameService.getById(this.userGameId).subscribe({
        next: (data) => this.userGame = data,
        error: (err) => console.error("Erreur lors du chargement du jeu :", err)
      });
    }
  }

  translateState(state: GameStatus | undefined): string {
    switch (state) {
      case GameStatus.NOT_STARTED: return 'Non commencé';
      case GameStatus.IN_PROGRESS: return 'En cours';
      case GameStatus.COMPLETED: return 'Terminé';
      default: return 'Inconnu';
    }
  }

  goToEdit(): void {
    this.router.navigate(['/home-client/user-game-form', this.userGameId]);
  }

  goToProgression(): void {
    this.router.navigate(['/home-client/user-game-progression', this.userGameId]);
  }

  goToCommentaries(): void {
    this.router.navigate(['/home-client/commentary-details', this.userGameId]);
  }

  goToGameSuccess(): void {
    this.router.navigate(['/home-client/game-success', this.userGameId]);
  }

}
