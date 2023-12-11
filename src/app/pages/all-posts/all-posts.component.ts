import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts.service';

import { PostOverviewComponent } from '../../components/post-overview/post-overview.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { NoResultsComponent } from '../../components/no-results/no-results.component';
import { CommonModule, NgFor } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-posts',
  standalone: true,
  imports: [
    PostOverviewComponent,
    PaginatorComponent,
    NoResultsComponent,
    CommonModule,
    NgFor,
    ReactiveFormsModule,
  ],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.scss',
})
export class AllPostsComponent implements OnInit {
  public posts: any[] = [];
  public postCount: number = 0;

  public showPaginator: boolean = false;
  public startPage: number = 0;
  public endPage: number = 2;
  public showingPages: number = 0;

  public filterForm = new FormGroup({
    word: new FormControl(''),
    date: new FormControl(''),
  });

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService
      .getAllPosts()
      .subscribe((posts: any[]) => this.setPostsAndCount(posts));
  }

  filterPosts(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const { word, date } = this.filterForm.value;

      if (!word && !date) {
        this.postsService
          .getAllPosts()
          .subscribe((posts: any[]) => this.setPostsAndCount(posts));

        return;
      }

      this.postsService
        .getFilteredPosts(word, date)
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
