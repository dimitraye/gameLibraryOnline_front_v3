import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GamePublic } from '../models/game-public';

@Injectable({ providedIn: 'root' })
export class GamePublicService {
  private apiUrl = 'http://localhost:8087/api/public-games';

  constructor(private http: HttpClient) {}

  getAll(): Observable<GamePublic[]> {
    return this.http.get<GamePublic[]>(this.apiUrl);
  }

  getById(id: number): Observable<GamePublic> {
    return this.http.get<GamePublic>(`${this.apiUrl}/${id}`);
  }

  create(game: GamePublic): Observable<GamePublic> {
    return this.http.post<GamePublic>(this.apiUrl, game);
  }
  

  update(game: GamePublic): Observable<GamePublic> {
    return this.http.put<GamePublic>(`${this.apiUrl}/${game.id}`, game);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
