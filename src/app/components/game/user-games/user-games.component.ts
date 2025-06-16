import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-games',
  standalone: true,
  imports: [],
  templateUrl: './user-games.component.html',
  styleUrl: './user-games.component.scss'
})
export class UserGamesComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}
    
  
    goToGameForm(): void {
      // Redirection vers le formulaire (logique à implémenter plus tard)
      this.router.navigate(['/home-client/game-form']);
      console.log('Redirection vers le formulaire d’ajout');
    }

}
