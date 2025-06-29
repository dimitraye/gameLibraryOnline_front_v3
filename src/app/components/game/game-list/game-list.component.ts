import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamePublic } from '../../../models/game-public';
import { GamePublicService } from '../../../services/game-public-service.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { SessionService } from '../../../services/session.service'; // <-- Ajoute ceci

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {
  games: GamePublic[] = [];
  baseUrl = environment.apiUrl;

  constructor(
    private router: Router,
    private gamePublicService: GamePublicService,
    private sessionService: SessionService // <-- Injection ici
  ) {}

  ngOnInit(): void {
    this.gamePublicService.getAll().subscribe({
      next: (data) => this.games = data,
      error: (err) => console.error('Erreur récupération jeux :', err)
    });
  }

  goToGameForm(): void {
    const path = this.sessionService.getHomePath();
    this.router.navigate([`${path}/game-form`]);
    console.log('Redirection vers :', `${path}/game-form`);
  }
}
