import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  public optionsMenu: Element | null = null;
  public username = localStorage.getItem('username') || '';

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.optionsMenu = document.querySelector('.options');
  }

  toggleMenu() {
    if (!this.optionsMenu) return;

    if (this.optionsMenu.classList.contains('opened')) {
      this.optionsMenu.classList.remove('opened');
      this.optionsMenu.classList.add('closed');
    } else {
      this.optionsMenu.classList.remove('closed');
      this.optionsMenu.classList.add('opened');
    }
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
