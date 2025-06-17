import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-statistic-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistic-summary.component.html',
  styleUrl: './statistic-summary.component.scss'
})
export class StatisticSummaryComponent {
  stats = [
    { label: 'Total jeux', value: 12 },
    { label: 'Succès débloqués', value: 34 },
    { label: 'Temps de jeu', value: '120h' }
  ];

}
