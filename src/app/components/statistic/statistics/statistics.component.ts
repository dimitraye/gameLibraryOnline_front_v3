import { Component } from '@angular/core';
import { Statistic } from '../../../models/statistic';

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
  statistic: Statistic = {
  id: 1,
  nbTotalGames: 75,
  nbGamesNotStarted: 20,
  nbGamesStarted: 30,
  ngGamesFinished: 25,
  nbGamesByGenre: 0,         // à venir
  nbGamesByPlateform: 0,     // à venir
  user: { username: 'JoDoe54', password: '' } as any
};


}
