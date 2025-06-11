import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      gender: [true, Validators.required],
      adress: ['', Validators.required],
      postCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  onRegister(): void {
    if (this.registerForm.invalid) return;

    const { username, password } = this.registerForm.value;

    this.authService.register(this.registerForm.value).subscribe({
      next: () => {
        // Connexion automatique après l'inscription
        this.authService.login(username, password).subscribe({
          next: () => this.router.navigate(['/home']),
          error: err => console.error('Erreur de connexion automatique :', err)
        });
      },
      error: err => console.error('Erreur d\'inscription :', err)
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
