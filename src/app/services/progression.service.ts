import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Progression } from '../models/progression';
import { ProgressionDTO } from '../models/progression-dto';

@Injectable({
  providedIn: 'root'
})
export class ProgressionService {
  private apiUrl = 'http://localhost:8087/api/progression';

  constructor(private http: HttpClient) {}

  create(progression: ProgressionDTO): Observable<Progression> {
    return this.http.post<Progression>(this.apiUrl, progression);
  }
}