import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGame } from '../../../models/user-game';
import { UserGameService } from '../../../services/user-game-service.service';


@Component({
  selector: 'app-user-game-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-game-carousel.component.html',
  styleUrls: ['./user-game-carousel.component.scss']
})
export class UserGameCarouselComponent implements OnInit {
  userGames: UserGame[] = [];

  constructor(private userGameService: UserGameService) {}

  /**ngOnInit(): void {
    this.userGameService.getAll().subscribe({
      next: (data) => this.userGames = data,
      error: (err) => console.error(err)
    });
  }**/

  ngOnInit(): void {
    console.log('GameCarousel INIT');
    this.userGameService.getAll().subscribe({
      next: (data) => {
        console.log('GamePublic[] reçus :', data);
        this.userGames = data;
      },
      error: (err) => console.error('Erreur GamePublic:', err)
    });
  }

}
