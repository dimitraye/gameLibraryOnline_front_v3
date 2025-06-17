import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  userForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  
    ngOnInit(): void {
      this.userForm = this.fb.group({
        title: ['', Validators.required],
        platforms: [[], Validators.required],
        genres: [[], Validators.required],
        picture: ['']
      });
    }
  
    onSubmit(): void {
      if (this.userForm.valid) {
        console.log('Formulaire soumis !', this.userForm.value);
      }
    }

}
