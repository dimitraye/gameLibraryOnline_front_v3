// models/success.model.ts

import { Game } from "./game";
import { UserGame } from "./user-game";

export interface Success {
  idSuccess: number;
  description: string;
  owned: boolean;

  userGame: UserGame;
}
