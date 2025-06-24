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
  pictureFile!: File;
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
    if (this.gameForm.invalid || !this.pictureFile) {
      alert("Tous les champs sont obligatoires, y compris l'image.");
      return;
    }

    const formValue = this.gameForm.value;

    const formData = new FormData();
    formData.append('title', formValue.title);
    formData.append('platforms', formValue.platforms);
    formData.append('genres', formValue.genres);
    formData.append('picture', this.pictureFile);

    this.gameService.uploadWithImage(formData).subscribe({
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


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.pictureFile = input.files[0];
    }
  }

}
