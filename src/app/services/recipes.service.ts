import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private URL = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) {}

  // GET tutte le ricette
  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.URL);
  }

  // GET singola ricetta
  getRecipe(id: string): Observable<any> {
    return this.http.get<any>(this.URL + '/' + id);
  }
}
