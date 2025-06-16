import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePublic } from '../../../models/game-public';
import { GamePublicService } from '../../../services/game-public-service.service';


@Component({
  selector: 'app-game-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-carousel.component.html',
  styleUrls: ['./game-carousel.component.scss']
})
export class GameCarouselComponent implements OnInit {
  games: GamePublic[] = [];

  constructor(private gameService: GamePublicService) {}

  /**ngOnInit(): void {
    this.gameService.getAll().subscribe({
      next: (data) => this.games = data,
      error: (err) => console.error(err)
    });
  }**/

    ngOnInit(): void {
      console.log('GameCarousel INIT');
      this.gameService.getAll().subscribe({
        next: (data) => {
          console.log('GamePublic[] reçus :', data);
          this.games = data;
        },
        error: (err) => console.error('Erreur GamePublic:', err)
      });
    }

}
