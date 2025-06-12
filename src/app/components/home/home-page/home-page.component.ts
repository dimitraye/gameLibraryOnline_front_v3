import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(
    private authService: AuthService,
     private router: Router,
     private sessionService: SessionService) {
  }

    ngOnInit(): void {
    const role = this.authService.getRoleFromStorage(); // Exemple : 'CLIENT' ou 'ADMIN'

    if (role === 'ADMIN') {
      this.router.navigate(['/home-admin']);
    } else {
      this.router.navigate(['/home-client']);
    }
  }


}
