// posts.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl = 'http://localhost:5000'; // Adjust if your Flask app is on a different URL

  constructor(private http: HttpClient) { }

  loadData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  // Add other methods here if needed for delete, update, etc.
}
