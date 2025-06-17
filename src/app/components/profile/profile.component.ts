import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private router: Router) {}

  user: User = {
    username: 'JoDoe54',
    password: '',
    firstname: 'Jordan',
    lastname: 'Doe',
    birthDate: '1988-07-15',
    gender: false,
    adress: '42 avenue des Jeux Vidéo',
    postCode: '69000',
    city: 'Lyon',
    country: 'France',
    phoneNumber: '+33 7 89 01 23 45',
    email: 'jodoe54@example.com',
    registrationDate: '2024-09-12',
    idUser: 1
  };

  goToEdit(): void {
    this.router.navigate(['/home-client/user-form', this.user.idUser]);
  }
}
