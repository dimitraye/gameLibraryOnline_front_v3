import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionService } from '../../../services/session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone:true,
  imports: [ReactiveFormsModule],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sessionService : SessionService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin(): void {
    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe({
      next: (response) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          console.log('Token juste avant appel à me() :', localStorage.getItem('token'));

          this.authService.me().subscribe({
            next: (user) => {
              this.sessionService.logIn(user);
              this.router.navigate(['/home']);
            },
            error: (err) => {
              console.error('Erreur lors de la récupération de l’utilisateur :', err);
              this.sessionService.logOut();
            }
          });

        } else {
          console.error("Aucun token reçu depuis le backend.");
        }
      },
      error: (err) => console.error(err)
    });
  }


  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
