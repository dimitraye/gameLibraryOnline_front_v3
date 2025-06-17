// models/commentary.model.ts

import { Game } from "./game";
import { UserGame } from "./user-game";
import { User } from "./user.model";


export interface Commentary {
  idCommentary: number;
  commentary: string;
  creationDate: string; // Java Date → ISO string

  user: User;
  userGame: UserGame;
}
