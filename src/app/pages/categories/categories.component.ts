import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CategoryService } from '../../services/category.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-categories',
  imports: [CommonModule, NavbarComponent, FooterComponent, HttpClientModule],
  providers: [CategoryService],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(
    private CategoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.CategoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  goToCategory(categoryId: number): void {
    this.router.navigate(['/category', categoryId]);
  }
}
