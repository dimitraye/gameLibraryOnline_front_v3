import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserGame } from '../models/user-game';
import { GamePublic } from '../models/game-public';

@Injectable({ providedIn: 'root' })
export class UserGameService {
  private apiUrl = 'http://localhost:8087/api/user-games';

  constructor(private http: HttpClient) {}

  getAll(): Observable<UserGame[]> {
    return this.http.get<UserGame[]>(this.apiUrl);
  }

  getById(id: number): Observable<UserGame> {
    return this.http.get<UserGame>(`${this.apiUrl}/${id}`);
  }

  create(userGame: UserGame): Observable<UserGame> {
    return this.http.post<UserGame>(this.apiUrl, userGame);
  }

  updateUserGame(userGameId: number, userGame: Partial<UserGame>): Observable<UserGame> {
    return this.http.put<UserGame>(`${this.apiUrl}/${userGameId}`, userGame);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addGameToUser(userId: number, game: GamePublic): Observable<UserGame> {
    return this.http.post<UserGame>(`${this.apiUrl}/${userId}`, game);
  }
}
