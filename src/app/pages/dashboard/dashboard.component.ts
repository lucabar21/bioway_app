import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { IonInput } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [FooterComponent, CommonModule, NavbarComponent, IonInput],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
