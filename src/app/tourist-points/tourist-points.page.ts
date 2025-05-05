import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tourist-points',
  templateUrl: './tourist-points.page.html',
  styleUrls: ['./tourist-points.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule] // Importing CommonModule and IonicModule
})
export class TouristPointsPage {}