import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Success } from '../models/success';

@Injectable({ providedIn: 'root' })
export class SuccessService {
  private apiUrl = 'http://localhost:8087/api/success';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Success[]> {
    return this.http.get<Success[]>(this.apiUrl);
  }

  getById(id: number): Observable<Success> {
    return this.http.get<Success>(`${this.apiUrl}/${id}`);
  }

  get5SuccessById(userId: number): Observable<Success[]> {
    return this.http.get<Success[]>(`${this.apiUrl}/user/${userId}/five`);
  }

}
