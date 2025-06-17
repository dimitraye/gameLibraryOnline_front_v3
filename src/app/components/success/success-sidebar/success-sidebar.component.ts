import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { Success } from '../../../models/success';
import { SuccessService } from '../../../services/success.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-success-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-sidebar.component.html',
  styleUrls: ['./success-sidebar.component.scss']
})
export class SuccessSidebarComponent implements OnInit {
  successes: Success[] = [];

  constructor(
    private successService: SuccessService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.me().subscribe({
      next: (user) => {
        const userId = user?.idUser;
        if (!userId) {
          console.error('ID utilisateur non trouvé');
          return;
        }

        this.successService.get5SuccessById(userId).subscribe({
          next: (data) => this.successes = data,
          error: (err) => console.error('Erreur récupération succès:', err)
        });
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de l’utilisateur connecté:', err);
      }
    });
  }

  goToSuccessDetails(id: number): void {
    this.router.navigate(['/home-client/success-details', id]);
  }
}


