import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgressionService } from '../../../services/progression.service';
import { Progression } from '../../../models/progression';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-progression-form',
  templateUrl: './progression-form.component.html',
  styleUrls: ['./progression-form.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule], // AJOUT FormsModule
})
export class ProgressionFormComponent implements OnInit {
  progression: Progression = {
    idProgression: 0,
    detailsProgression: '',
    percentageCompletion: 0,
    userGame: null // à remplir si nécessaire
  };
  userGameId!: number;
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private progressionService: ProgressionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userGameId = Number(this.route.snapshot.paramMap.get('id'));
    // Charger une progression existante si disponible (implémenter le getByUserGameId côté backend si besoin)
    // Exemple :
    // this.progressionService.getByUserGameId(this.userGameId).subscribe(...)
  }

  onSubmit(): void {
    if (this.isEdit && this.progression.idProgression) {
      this.progressionService.update(this.progression.idProgression, this.progression).subscribe(() => {
        alert('Progression mise à jour');
        this.router.navigate(['/home-client/user-game-details', this.userGameId]);
      });
    } else {
      this.progressionService.create({
        detailsProgression: this.progression.detailsProgression,
        percentageCompletion: this.progression.percentageCompletion,
        userGameId: this.userGameId
      }).subscribe(() => {
        alert('Progression enregistrée');
        this.router.navigate(['/home-client/user-game-details', this.userGameId]);
      });
    }
  }
}
