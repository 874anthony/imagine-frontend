import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get<any[]>(`${environment.baseURL}/posts`);
  }

  create(title: string, message: string) {
    return this.http.post<any>(`${environment.baseURL}/posts`, {
      title,
      message,
    });
  }

  getMyPosts(date?: string | undefined | null) {
    let url = `${environment.baseURL}/posts/my-posts`;

    if (date) url += `?date=${date}`;
    return this.http.get<any[]>(url);
  }

  getFilteredPosts(
    word: string | undefined | null,
    date: string | undefined | null
  ) {
    let url = `${environment.baseURL}/posts/word-in-title-or-date`;

    if (word && date) {
      url += `?word=${word}&date=${date}`;
    } else if (word) {
      url += `?word=${word}`;
    } else if (date) {
      url += `?date=${date}`;
    }

    return this.http.get<any[]>(url);
  }
}
