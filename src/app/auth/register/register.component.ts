import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  onSubmit() {
    const { name, email, password } = this.registerForm.value;

    if (this.registerForm.invalid) return;

    this.authService
      .register(name!, email!, password!)
      .subscribe(({ name, access_token }: any) => {
        localStorage.setItem('username', name);
        localStorage.setItem('token', access_token);
        this.router.navigate(['/dashboard/my-posts']);
      });
  }
}
