import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.page.html',
  styleUrls: ['./general-data.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class GeneralDataPage {}