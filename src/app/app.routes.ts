import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { PagesComponent } from './pages/pages.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { MyPostsComponent } from './pages/my-posts/my-posts.component';
import { AllPostsComponent } from './pages/all-posts/all-posts.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // TODO: With auth guard
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: 'all-posts', component: AllPostsComponent },
      { path: 'my-posts', component: MyPostsComponent },
      { path: 'create-post', component: CreatePostComponent },
      { path: '**', redirectTo: 'all-posts', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
