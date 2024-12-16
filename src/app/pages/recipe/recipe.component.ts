import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-recipe',
  imports: [
    CommonModule,
    HttpClientModule,
    NavbarComponent,
    FooterComponent,
    IonIcon,
  ],
  providers: [RecipesService],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent implements OnInit {
  recipe: any;
  recipeId!: number;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.recipeId = +params['id'];
    });

    this.recipesService
      .getRecipe(this.recipeId.toString())
      .subscribe((data) => {
        this.recipe = data;
      });
  }

  goBack(): void {
    this.location.back();
  }

  // Divido l'oggetto ingredienti in valori chiave e valore per ciclarli
  getIngredients() {
    return Object.entries(this.recipe.ingredients).map(([key, value]) => ({
      key,
      value,
    }));
  }

  // Rendo il primo carattere maiuscolo
  capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
