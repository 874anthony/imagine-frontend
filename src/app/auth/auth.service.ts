import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${environment.baseURL}/auth/login`, {
      email,
      password,
    });
  }

  register(name: string, email: string, password: string) {
    return this.http.post(`${environment.baseURL}/auth/signup`, {
      name,
      email,
      password,
    });
  }
}
