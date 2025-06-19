import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Platform } from '../../../models/platform';
import { VideoGameGenre } from '../../../models/video-game-genre';
import { GamePublicService } from '../../../services/game-public-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './game-form.component.html',
  styleUrl: './game-form.component.scss'
})
export class GameFormComponent implements OnInit {
  gameForm!: FormGroup;
  platforms = Object.values(Platform);
  genres = Object.values(VideoGameGenre);

  constructor(
    private fb: FormBuilder,
    private gameService: GamePublicService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gameForm = this.fb.group({
      title: ['', Validators.required],
      platforms: ['', Validators.required], // une seule valeur
      genres: ['', Validators.required],    // une seule valeur
      picture: ['']
    });
  }

  onSubmit(): void {
    if (this.gameForm.invalid) return;

    const formValue = this.gameForm.value;

    const newGame = {
      title: formValue.title,
      platforms: [formValue.platforms], // converti en tableau
      genres: [formValue.genres],       // idem
      picture: formValue.picture
    };

    this.gameService.create(newGame).subscribe({
      next: () => {
        alert('Jeu ajouté avec succès !');
        this.router.navigate(['/home-client/games']);
      },
      error: (err) => {
        console.error('Erreur lors de la création du jeu :', err);
        alert("Une erreur s'est produite lors de l'enregistrement.");
      }
    });
  }
}
