import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { CreatePostComponent } from './pages/create-post/create-post.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // TODO: With auth guard
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: 'create-post', component: CreatePostComponent },
      { path: '**', redirectTo: 'create-post', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
