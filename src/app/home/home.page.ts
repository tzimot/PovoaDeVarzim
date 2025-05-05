import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class HomePage {
  constructor(private router: Router) {}

  goToTouristPoints() {
    this.router.navigate(['/tourist-points']);
  }

  goToGastronomy() {
    this.router.navigate(['/gastronomy']);
  }

  goToUsefulInfo() {
    this.router.navigate(['/useful-info']);
  }

  goToGeneralData() {
    this.router.navigate(['/general-data']);
  }
}