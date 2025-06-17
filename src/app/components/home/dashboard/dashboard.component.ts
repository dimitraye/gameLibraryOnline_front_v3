import { Component } from '@angular/core';
import { GameCarouselComponent } from '../../game/game-carousel/game-carousel.component';
import { UserGameCarouselComponent } from '../../game/user-game-carousel/user-game-carousel.component';
import { StatisticSummaryComponent } from '../../statistic/statistic-summary/statistic-summary.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GameCarouselComponent, UserGameCarouselComponent, StatisticSummaryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  ngOnInit(): void {
    console.log('DashboardComponent mounted');
  }


}
