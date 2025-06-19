import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-success',
  standalone: true,
  imports: [],
  templateUrl: './game-success.component.html',
  styleUrl: './game-success.component.scss'
})
export class GameSuccessComponent {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userGameId = Number(params.get('id'));
      if (userGameId) {
        console.log('Chargement des succès du UserGame ID :', userGameId);
        // Charger les succès ici
      }
    });
  }


}
