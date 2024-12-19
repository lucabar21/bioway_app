import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { CartService } from '../../services/cart.service';

@Component({
  standalone: true,
  selector: 'app-cart-item',
  imports: [IonIcon, CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() item: any;
  isOpen: boolean = false;

  constructor(private cartService: CartService) {}

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
    // window.location.reload();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
