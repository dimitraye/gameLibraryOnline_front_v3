// models/progression.model.ts

import { Game } from "./game";
import { UserGame } from "./user-game";
import { User } from "./user.model";


export interface Progression {
  idProgression: number;
  detailsProgression: string;
  percentageCompletion: number;

  user?: User;
  userGame: UserGame | null;
}
