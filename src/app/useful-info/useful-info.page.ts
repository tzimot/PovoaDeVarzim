import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-useful-info',
  templateUrl: './useful-info.page.html',
  styleUrls: ['./useful-info.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule] // Importing CommonModule and IonicModule
})
export class UsefulInfoPage {}