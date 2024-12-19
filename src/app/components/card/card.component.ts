import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { CartService } from '../../services/cart.service';

@Component({
  standalone: true,
  selector: 'app-card',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() product: any;
  cartProducts: any[] = [];

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {}

  goToProduct(id: number) {
    this.router.navigate(['/product', id]);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    // window.location.reload();
  }
}
