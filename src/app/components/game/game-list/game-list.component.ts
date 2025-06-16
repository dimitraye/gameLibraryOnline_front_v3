import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  

  goToGameForm(): void {
    // Redirection vers le formulaire (logique à implémenter plus tard)
    this.router.navigate(['/home-client/game-form']);
    console.log('Redirection vers le formulaire d’ajout');
  }

}
