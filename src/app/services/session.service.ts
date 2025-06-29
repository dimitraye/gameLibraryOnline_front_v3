import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private isLoggedSubject = new BehaviorSubject<boolean>(false);
  public isLogged = false;
  public user?: User;

  $isLogged(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  logIn(user: User) {
    this.user = user;
    this.isLogged = true;
    this.isLoggedSubject.next(true);
  }

  logOut() {
    localStorage.removeItem('token');
    this.user = undefined;
    this.isLogged = false;
    this.isLoggedSubject.next(false);
  }

    getHomePath(): string {
      const role = this.getUser()?.role;
      return role === 'admin' ? '/home-admin' : '/home-client';
    }

    getUser(): User | undefined {
      return this.user;
    }


  

}

