import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private URL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  // GET tutti i prodotti
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.URL);
  }

  // GET singolo prodotto
  getProduct(id: string): Observable<any> {
    return this.http.get<any>(this.URL + '/' + id);
  }
}
