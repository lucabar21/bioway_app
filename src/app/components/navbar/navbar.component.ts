import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonSearchbar, IonIcon } from '@ionic/angular/standalone';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    IonIcon,
    IonSearchbar,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    CartComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  menuOpen: boolean = false;
  cartOpen: boolean = false;
  items: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((data) => {
      this.items = data;
    });
  }

  toggleCart() {
    this.cartOpen = !this.cartOpen;
  }

  toggleMobileMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
