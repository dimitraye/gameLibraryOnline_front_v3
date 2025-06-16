import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VideoGameGenre } from '../../../models/video-game-genre';
import { Platform } from '../../../models/platform';


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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.gameForm = this.fb.group({
      title: ['', Validators.required],
      platforms: [[], Validators.required],
      genres: [[], Validators.required],
      picture: ['']
    });
  }

  onSubmit(): void {
    if (this.gameForm.valid) {
      console.log('Formulaire soumis !', this.gameForm.value);
    }
  }
}
