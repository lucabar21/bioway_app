import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-recipe-card',
  imports: [CommonModule, IonIcon],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  @Input() recipe: any;

  constructor(private router: Router) {}

  goToRecipe(id: number) {
    this.router.navigate(['/recipe', id]);
  }
}
