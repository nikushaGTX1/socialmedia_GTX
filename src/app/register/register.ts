import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  model = {
    username: '',
    email: '',
    password: '',
  };

  loading = false;
  error: string | null = null;
  success: string | null = null;

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    if (form.invalid || this.loading) {
      return;
    }

    this.loading = true;
    this.error = null;
    this.success = null;

    this.authService
      .register({
        username: this.model.username,
        email: this.model.email,
        password: this.model.password,
      })
      .subscribe({
        next: () => {
          this.success = 'Registration successful.';
          this.loading = false;
          form.resetForm();
        },
        error: (err) => {
          console.error('Registration failed', err);
          this.error =
            err?.error?.message || 'Registration failed. Please try again.';
          this.loading = false;
        },
      });
  }
}
