import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [NgFor, NgClass],
  inputs: ['posts'],
  outputs: ['postToShow'],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent implements OnInit {
  public posts: any[] = [];

  public currentPage: number = 1;
  public postsPerPage: number = 2;

  public arrayOfPages: number[] = [];

  public postToShow = new EventEmitter<{}>();

  ngOnInit() {
    this.arrayOfPages = new Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  goToBeginning() {
    this.setPagesAndEmit(1);
  }

  goBack() {
    if (this.currentPage > 1) {
      this.setPagesAndEmit(this.currentPage - 1);
    }
  }

  goForward() {
    if (this.currentPage < this.totalPages) {
      this.setPagesAndEmit(this.currentPage + 1);
    }
  }

  goToEnd() {
    this.setPagesAndEmit(this.totalPages);
  }

  goToPage(event: any) {
    const { dataset } = event.target;
    const { page } = dataset;

    this.setPagesAndEmit(page);
  }

  private setPagesAndEmit(page: number) {
    this.currentPage = page;

    const startPage = (this.currentPage - 1) * this.postsPerPage;
    const endPage = startPage + this.postsPerPage;

    this.postToShow.emit({
      startPage,
      endPage,
      showingPosts: Math.min(this.posts.length, endPage),
    });
  }

  public get totalPages(): number {
    return Math.ceil(this.posts.length / this.postsPerPage);
  }
}
