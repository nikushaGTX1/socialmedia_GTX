import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = 'https://localhost:7137/api/Auth';

  constructor(private http: HttpClient) {}

  // Register new user
  register(payload: RegisterRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, payload);
  }

  // Login user
  login(payload: LoginRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, payload);
  }
}
