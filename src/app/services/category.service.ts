import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private URL = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  // GET tutte le categorie
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.URL);
  }

  // GET singola categoria
  getCategory(id: string): Observable<any> {
    return this.http.get<any>(this.URL + '/' + id);
  }
}
