import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-overview',
  standalone: true,
  imports: [CommonModule],
  inputs: ['post'],
  templateUrl: './post-overview.component.html',
  styleUrl: './post-overview.component.scss',
})
export class PostOverviewComponent {
  public post: any;
}
