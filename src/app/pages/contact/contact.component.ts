import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { IonIcon, IonInput, IonTextarea } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    IonInput,
    IonTextarea,
    IonIcon,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
