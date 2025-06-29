import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Import nécessaire pour *ngFor, *ngIf, etc.
import { User } from '../../../models/user.model';
import { UserServiceService } from '../../../services/user-service.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule], // ✅ Ajoute ce module ici
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserServiceService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (users) => this.users = users,
      error: (err) => console.error('Erreur chargement utilisateurs :', err)
    });
  }

  viewUser(id: number) {
    this.router.navigate(['user-details', id]);
  }

  editUser(id: number) {
    this.router.navigate(['user-form', id]);
  }

  deleteUser(id: number) {
    if (confirm('Supprimer cet utilisateur ?')) {
      this.userService.delete(id).subscribe({
        next: () => this.users = this.users.filter(u => u.idUser !== id),
        error: (err) => console.error('Erreur suppression :', err)
      });
    }
  }
}
