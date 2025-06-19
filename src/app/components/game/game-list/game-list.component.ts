import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GamePublic } from '../../../models/game-public';
import { GamePublicService } from '../../../services/game-public-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit{
  games: GamePublic[] = [];

  constructor(
    private router: Router,
    private gamePublicService: GamePublicService
  ) {}

  ngOnInit(): void {
    this.gamePublicService.getAll().subscribe({
      next: (data) => this.games = data,
      error: (err) => console.error('Erreur récupération jeux :', err)
    });
  }
  


  goToGameForm(): void {
    // Redirection vers le formulaire (logique à implémenter plus tard)
    this.router.navigate(['/home-client/game-form']);
    console.log('Redirection vers le formulaire d’ajout');
  }

}
