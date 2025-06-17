import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-success-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './success-form.component.html',
  styleUrl: './success-form.component.scss'
})
export class SuccessFormComponent implements OnInit {
  successForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.successForm = this.fb.group({
      description: ['', Validators.required],
      obtained: [null, Validators.required]
    });
  }

  toggleObtained(value: boolean): void {
    const current = this.successForm.get('obtained')?.value;
    this.successForm.get('obtained')?.setValue(current === value ? null : value);
  }

  onSubmit(): void {
    if (this.successForm.valid) {
      console.log('Formulaire soumis !', this.successForm.value);
    }
  }
}
