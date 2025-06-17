// models/statistic.model.ts
import { User } from './user.model';

export interface Statistic {
  id: number;

  nbTotalGames: number;
  nbGamesNotStarted: number;
  nbGamesStarted: number;
  ngGamesFinished: number;
  nbGamesByPlateform: number;
  nbGamesByGenre: number;

  user: User;
}

