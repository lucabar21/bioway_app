import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, Location } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CardComponent } from '../../components/card/card.component';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-category',
  imports: [
    FooterComponent,
    NavbarComponent,
    CommonModule,
    HttpClientModule,
    CardComponent,
    IonIcon,
  ],
  providers: [CategoryService, ProductService],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  category: any = null;
  products: any[] = [];
  categoryId!: number;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = +params['id'];
      this.getProductsByCategory(this.categoryId);
    });
  }

  getProductsByCategory(categoryId: number): void {
    this.categoryService
      .getCategory(categoryId.toString())
      .subscribe((category) => {
        this.category = category;

        this.productService.getProducts().subscribe((products) => {
          this.products = products.filter(
            (product) => product.category_id === categoryId
          );
        });
      });
  }

  goBack(): void {
    this.location.back();
  }
}
