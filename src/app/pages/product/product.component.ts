import { CommonModule, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ReviewComponent } from '../../components/review/review.component';
import { IonIcon } from '@ionic/angular/standalone';
import { CartService } from '../../services/cart.service';

@Component({
  standalone: true,
  selector: 'app-product',
  imports: [
    CommonModule,
    HttpClientModule,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    CarouselComponent,
    ReviewComponent,
    IonIcon,
  ],
  providers: [ProductService, CartService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  product: any;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = +params['id'];
      this.getProductDetails(productId);
    });
  }
  getProductDetails(productId: number) {
    this.productService.getProduct(productId.toString()).subscribe((data) => {
      this.product = data;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.location.reload();
  }

  goBack(): void {
    this.location.back();
  }
}
