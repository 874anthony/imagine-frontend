import { Component } from '@angular/core';

import { PostOverviewComponent } from '../../components/post-overview/post-overview.component';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [PostOverviewComponent],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent {}
