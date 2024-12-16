import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RecipesService } from '../../services/recipes.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';

@Component({
  standalone: true,
  selector: 'app-recipes',
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HttpClientModule,
    RecipeCardComponent,
  ],
  providers: [RecipesService],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent implements OnInit {
  recipes: any[] = [];

  constructor(private recipesService: RecipesService, private router: Router) {}

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((data) => {
      this.recipes = data;
    });
  }
}
