import { Commentary } from "./commentary";
import { GamePublic } from "./game-public";
import { GameStatus } from "./game-status";
import { Progression } from "./progression";
import { Success } from "./success";


export interface UserGame {
  id: number;
  userId: number;
  gamePublicId: number;
  datePurchase: string;
  playHours: number;
  state: GameStatus;
  gamePublic: GamePublic;

  progressions?: Progression[];
  successes?: Success[];
  commentaries?: Commentary[];
}
