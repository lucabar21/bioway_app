import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  standalone: true,
  selector: 'app-cart',
  imports: [CommonModule, IonIcon, CartItemComponent, CartItemComponent],
  providers: [CartService],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  cartItems: any[] = [];
  total: number = 4.99;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getItemsFromCart();
    this.cartService.getTotal().subscribe((total) => {
      this.total = total + 4.99; // Aggiorna il totale ogni volta che cambia
    });
  }

  getItemsFromCart() {
    this.cartService.getCartItems().subscribe((data) => {
      this.cartItems = data;
    });
  }

  clearCart() {
    this.cartService.clearCart();
    window.location.reload();
  }

  closeCart() {
    this.close.emit();
  }
}
