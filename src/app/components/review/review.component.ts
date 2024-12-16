import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-review',
  imports: [CommonModule, IonIcon],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
})
export class ReviewComponent implements OnInit {
  @Input() reviews: number[] = []; // Array con i voti per ogni valutazione (es. [10, 15, 25, 30, 20])
  stars: number[] = [1, 2, 3, 4, 5];
  totalVotes: number = 0;
  averageRating: number = 0;

  ngOnInit(): void {
    this.calculateTotalVotes();
    this.calculateAverageRating();
  }

  // Calcola il totale dei voti
  calculateTotalVotes(): void {
    this.totalVotes = this.reviews.reduce((sum, count) => sum + count, 0);
  }

  // Calcola la media delle valutazioni
  calculateAverageRating(): void {
    const totalRating = this.reviews.reduce(
      (sum, count, index) => sum + count * (5 - index),
      0
    );
    this.averageRating =
      this.totalVotes > 0 ? totalRating / this.totalVotes : 0;
  }

  // Percentuale per la progress bar
  getPercentage(value: number): number {
    return this.totalVotes > 0 ? (value / this.totalVotes) * 100 : 0;
  }

  // Controlla se la stella corrente è mezza piena
  isHalfStar(index: number): boolean {
    return (
      index < Math.floor(this.averageRating) && index + 1 > this.averageRating
    );
  }
}
