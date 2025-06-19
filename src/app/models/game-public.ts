import { Platform } from "./platform";
import { VideoGameGenre } from "./video-game-genre";


export interface GamePublic {
  id?: number;
  title: string;
  platforms: Platform[];
  genres: VideoGameGenre[];
  picture: string;
}
