import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  standalone: true,
  selector: 'app-carousel',
  imports: [HttpClientModule, CommonModule, CardComponent],
  providers: [ProductService],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  products: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.slice(0, 4);
    });
  }
}
