import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model'; // adapte si nécessaire

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [],
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})
export class MeComponent implements OnInit {
  user!: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.me().subscribe({
      next: user => this.user = user,
      error: err => console.error('Erreur récupération user :', err)
    });
  }
}
