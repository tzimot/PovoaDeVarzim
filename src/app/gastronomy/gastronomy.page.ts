import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-gastronomy',
  templateUrl: './gastronomy.page.html',
  styleUrls: ['./gastronomy.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule] // Importing CommonModule and IonicModule
})
export class GastronomyPage {}