import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtResponse } from '../models/jwt-response.model';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8087/api/auth'; // adapte selon ton backend

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<JwtResponse> {
  return this.http.post<JwtResponse>(`${this.apiUrl}/login`, { username, password });
}

  me(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`);
  }



  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }


  logout(): void {
    localStorage.clear();
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    console.log('Token récupéré par getToken() :', token);
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
