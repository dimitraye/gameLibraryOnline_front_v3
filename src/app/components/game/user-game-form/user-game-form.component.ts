import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GamePublic } from '../../../models/game-public';
import { GameStatus } from '../../../models/game-status';
import { UserGame } from '../../../models/user-game';
import { VideoGameGenre } from '../../../models/video-game-genre';
import { GamePublicService } from '../../../services/game-public-service.service';
import { UserGameService } from '../../../services/user-game-service.service';
import { Platform } from '../../../models/platform';

@Component({
  selector: 'app-user-game-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-game-form.component.html',
  styleUrl: './user-game-form.component.scss'
})
export class UserGameFormComponent implements OnInit {
  userGameForm!: FormGroup;
  platforms = Object.values(Platform);
  genres = Object.values(VideoGameGenre);
  states = [
    { label: 'Non commencé', value: GameStatus.NOT_STARTED },
    { label: 'En cours', value: GameStatus.IN_PROGRESS },
    { label: 'Terminé', value: GameStatus.COMPLETED }
  ];

  userId = 1; // À remplacer dynamiquement plus tard

  constructor(
    private fb: FormBuilder,
    private gameService: GamePublicService,
    private userGameService: UserGameService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userGameForm = this.fb.group({
      title: ['', Validators.required],
      platforms: ['', Validators.required],
      genres: ['', Validators.required],
      picture: [''],
      datePurchase: [''],
      playHours: [0, [Validators.min(0)]],
      state: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userGameForm.invalid) return;

    const form = this.userGameForm.value;

    const gamePublic: Partial<GamePublic> = {
      title: form.title,
      platforms: [form.platforms],
      genres: [form.genres],
      picture: form.picture
    };

    this.gameService.create(gamePublic as GamePublic).subscribe({
      next: (createdGame: GamePublic) => {
        this.userGameService.addGameToUser(this.userId, createdGame).subscribe({
          next: (userGame: UserGame) => {
            const updatePayload: Partial<UserGame> = {
              datePurchase: form.datePurchase,
              playHours: form.playHours,
              state: form.state.value // ✅ correction
            };

            this.userGameService.updateUserGame(userGame.id!, updatePayload).subscribe({
              next: () => {
                alert('Jeu ajouté à votre bibliothèque.');
                this.router.navigate(['/home-client/user-games']);
              },
              error: () => alert("Erreur lors de la mise à jour du jeu.")
            });
          },
          error: () => alert("Ce jeu est déjà dans votre bibliothèque.")
        });
      },
      error: () => alert("Erreur lors de l’enregistrement du jeu public.")
    });
  }
}
