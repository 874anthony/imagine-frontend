import { Component } from '@angular/core';

import { PostOverviewComponent } from '../../components/post-overview/post-overview.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { NoResultsComponent } from '../../components/no-results/no-results.component';

@Component({
  selector: 'app-all-posts',
  standalone: true,
  imports: [PostOverviewComponent, PaginatorComponent, NoResultsComponent],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.scss',
})
export class AllPostsComponent {}
