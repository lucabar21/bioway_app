import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
