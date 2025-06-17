import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success-list.component.html',
  styleUrl: './success-list.component.scss'
})
export class SuccessListComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}
    
  
    goToSuccessForm(): void {
      // Redirection vers le formulaire (logique à implémenter plus tard)
      this.router.navigate(['/home-client/success-form']);
      console.log('Redirection vers le formulaire d’ajout');
    }

}
