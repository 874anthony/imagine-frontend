import { Component } from '@angular/core';

import { PostOverviewComponent } from '../../components/post-overview/post-overview.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [PostOverviewComponent, ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent {
  constructor(private postsService: PostsService, private router: Router) {}

  public createPostForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(20),
      Validators.maxLength(300),
    ]),
  });

  onSubmit() {
    if (this.createPostForm.invalid) return;

    const { title, message } = this.createPostForm.value;
    this.postsService.create(title!, message!).subscribe((post) => {
      console.log('Post', post);
      this.router.navigate(['/dashboard/my-posts']);
    });
  }
}
