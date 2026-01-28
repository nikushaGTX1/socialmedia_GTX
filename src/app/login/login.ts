import { Component } from '@angular/core';
import { AuthService,LoginRequest } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  standalone: false,
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required!';
      return;
    }

    const payload: LoginRequest = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(payload).subscribe({
      next: (res) => {
        this.successMessage = res.message;
        this.errorMessage = '';
        console.log('Logged in user:', res.user);
        localStorage.setItem('user', JSON.stringify(res.user));

      },
      error: (err) => {
        this.errorMessage = err.error || 'Login failed';
        this.successMessage = '';
      },
    });
  }
}
