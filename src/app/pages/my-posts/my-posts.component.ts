import { Component } from '@angular/core';

import { PostOverviewComponent } from '../../components/post-overview/post-overview.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { NoResultsComponent } from '../../components/no-results/no-results.component';

@Component({
  selector: 'app-my-posts',
  standalone: true,
  imports: [PostOverviewComponent, PaginatorComponent, NoResultsComponent],
  templateUrl: './my-posts.component.html',
  styleUrl: './my-posts.component.scss',
})
export class MyPostsComponent {}
