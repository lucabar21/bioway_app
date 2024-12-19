import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private URL = 'http://localhost:3000/cart';

  private cart: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private total: BehaviorSubject<number> = new BehaviorSubject<number>(0); // Aggiungi un BehaviorSubject per il totale

  cart$ = this.cart.asObservable();

  constructor(private http: HttpClient) {
    this.loadCartFromServer();
  }

  getCartItems(): Observable<any[]> {
    return this.cart.asObservable();
  }

  getTotal(): Observable<number> {
    return this.total.asObservable(); // Restituisci l'Observable del totale
  }

  private loadCartFromServer(): void {
    this.http.get<any[]>(this.URL).subscribe((data) => {
      this.cart.next(data);
      this.updateTotal(); // Aggiorna il totale quando i dati sono caricati
    });
  }

  addToCart(item: any) {
    const currentCart = this.cart.value;
    this.cart.next([...currentCart, item]);
    this.http.post(this.URL, item).subscribe(() => this.updateTotal());
  }

  removeFromCart(productId: number): void {
    const currentCart = this.cart.value;
    const updatedCart = currentCart.filter((item) => item.id !== productId);
    this.cart.next(updatedCart);
    this.http
      .delete(`${this.URL}/${productId}`)
      .subscribe(() => this.updateTotal());
  }

  clearCart(): void {
    const currentCart = this.cart.value;
    currentCart.forEach((product) => {
      this.http.delete(`${this.URL}/${product.id}`).subscribe(() => {
        this.cart.next([]);
        this.updateTotal();
      });
    });
  }

  private updateTotal(): void {
    const total = this.cart.value.reduce((sum, item) => sum + item.price, 0);
    this.total.next(total); // Aggiorna il valore del totale
  }
}
