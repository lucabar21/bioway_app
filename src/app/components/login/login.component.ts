import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonInput } from '@ionic/angular/standalone';
import { ButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [IonInput, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @Input() isOpen: boolean = false;
  constructor() {}
}
