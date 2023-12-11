import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  login() {
    const { email, password } = this.loginForm.value;

    if (this.loginForm.invalid) return;

    this.authService.login(email!, password!).subscribe({
      next: ({ name, access_token }: any) => {
        localStorage.setItem('username', name);
        localStorage.setItem('token', access_token);
        this.router.navigate(['/dashboard/all-posts']);
      },
      // TODO: Implement this
      error: (e) => console.log(e),
    });
  }
}
