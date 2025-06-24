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
  selectedFile!: File;
  platforms = Object.values(Platform);
  pictureFile!: File;
  genres = Object.values(VideoGameGenre);
  states = [
    { label: 'Non commencé', value: GameStatus.NOT_STARTED },
    { label: 'En cours', value: GameStatus.IN_PROGRESS },
    { label: 'Terminé', value: GameStatus.COMPLETED }
  ];

  userId = 1; // à remplacer plus tard par l'ID réel

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
      datePurchase: [''],
      playHours: [0, [Validators.min(0)]],
      state: ['', Validators.required]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.pictureFile = input.files[0];
    }
  }


  onSubmit(): void {
  if (this.userGameForm.invalid || !this.pictureFile) {
    alert("Tous les champs sont obligatoires, y compris l'image.");
    return;
  }

  const form = this.userGameForm.value;

  const formData = new FormData();
  formData.append('title', form.title);
  formData.append('platforms', form.platforms);
  formData.append('genres', form.genres);
  formData.append('picture', this.pictureFile);

  this.gameService.uploadWithImage(formData).subscribe({
    next: (createdGame: GamePublic) => {
      this.userGameService.addGameToUser(this.userId, createdGame).subscribe({
        next: (userGame: UserGame) => {
          const updatePayload: Partial<UserGame> = {
            datePurchase: form.datePurchase,
            playHours: form.playHours,
            state: form.state.value
          };

          this.userGameService.updateUserGame(userGame.id!, updatePayload).subscribe({
            next: () => {
              alert('Jeu ajouté avec image !');
              this.router.navigate(['/home-client/user-games']);
            },
            error: () => alert("Erreur mise à jour UserGame.")
          });
        },
        error: () => alert("Ce jeu est déjà dans votre bibliothèque.")
      });
    },
    error: () => alert("Erreur lors de l’upload du jeu public.")
  });
}

}
