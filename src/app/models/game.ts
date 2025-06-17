// models/game.model.ts

import { Platform } from "@angular/cdk/platform";
import { Success } from "./success";
import { User } from "./user.model";
import { Commentary } from "./commentary";
import { Progression } from "./progression";
import { GameStatus } from "./game-status";
import { VideoGameGenre } from "./video-game-genre";


export interface Game {
  idGame: number;
  title: string;
  platform: Platform;
  videoGameGenre: VideoGameGenre;
  datePurchase: string; // ISO string à partir de Java Date
  playHours: number;
  state: GameStatus;
  picture: string;

  user: User;

  // Facultatifs si exposés par le backend
  successes?: Success[];
  progressions?: Progression[];
  commentaries?: Commentary[];
}
