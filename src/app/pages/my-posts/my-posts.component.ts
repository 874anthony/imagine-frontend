import { Component } from '@angular/core';

import { PostOverviewComponent } from '../../components/post-overview/post-overview.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { NoResultsComponent } from '../../components/no-results/no-results.component';
import { PostsService } from '../posts.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-my-posts',
  standalone: true,
  imports: [
    PostOverviewComponent,
    PaginatorComponent,
    NoResultsComponent,
    ReactiveFormsModule,
    NgFor,
    NgIf,
  ],
  templateUrl: './my-posts.component.html',
  styleUrl: './my-posts.component.scss',
})
export class MyPostsComponent {
  public posts: any[] = [];
  public postCount: number = 0;

  public showPaginator: boolean = false;
  public startPage: number = 0;
  public endPage: number = 2;
  public showingPages: number = 0;

  public filterForm = new FormGroup({
    date: new FormControl(''),
  });

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService
      .getMyPosts()
      .subscribe((posts: any[]) => this.setPostsAndCount(posts));
  }

  filterPosts(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const { date } = this.filterForm.value;

      if (!date) {
        this.postsService
          .getMyPosts()
          .subscribe((posts: any[]) => this.setPostsAndCount(posts));

        return;
      }

      this.postsService
        .getMyPosts(date)
        .subscribe((posts: any[]) => this.setPostsAndCount(posts));
    }
  }

  getStartAndEndPage(event: any) {
    const { startPage, endPage, showingPosts } = event;

    this.startPage = startPage;
    this.endPage = endPage;
    this.showingPages = showingPosts;
  }

  private setPostsAndCount(posts: any[]): void {
    this.posts = posts;
    this.postCount = posts.length;
    this.showingPages = Math.min(this.postCount, 2);

    this.showPaginator = this.postCount > 2;
  }

  public get paginatedPosts(): any[] {
    return this.posts.slice(this.startPage, this.endPage);
  }
}
