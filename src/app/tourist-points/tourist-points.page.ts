import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tourist-points',
  templateUrl: './tourist-points.page.html',
  styleUrls: ['./tourist-points.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class TouristPointsPage {
  constructor(
    private router: Router,
    private modalController: ModalController
  ) {}

  async openSpotDetails(spot: string) {
    let content = '';
    let title = '';

    switch(spot) {
      case 'casino':
        title = 'Casino da Póvoa';
        content = 'O Casino da Póvoa é um dos mais emblemáticos casinos de Portugal. Inaugurado em 1934, oferece uma experiência única de entretenimento com jogos de mesa tradicionais, slots, restaurantes de alta qualidade e shows ao vivo. O edifício em si é um marco arquitetônico da cidade, combinando elegância clássica com modernidade.';
        break;
      case 'praia':
        title = 'Praia da Póvoa de Varzim';
        content = 'A Praia da Póvoa de Varzim é conhecida por suas areias douradas e águas cristalinas do Atlântico. Com uma extensa orla marítima, oferece excelentes condições para banhos, esportes aquáticos e passeios à beira-mar. A praia é vigiada durante o verão e possui infraestrutura completa com restaurantes, bares e áreas de lazer.';
        break;
      case 'parque':
        title = 'Parque da Cidade';
        content = 'O Parque da Cidade é um verdadeiro pulmão verde com 90 hectares de área. Possui trilhas para caminhada e corrida, lagos artificiais, áreas de piquenique, parques infantis e instalações desportivas. É o lugar perfeito para atividades ao ar livre, exercícios físicos ou simplesmente relaxar em meio à natureza.';
        break;
    }

    const modal = await this.modalController.create({
      component: SpotDetailsModal,
      componentProps: {
        title: title,
        content: content
      },
      cssClass: 'spot-details-modal'
    });

    await modal.present();
  }
}

@Component({
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title class="modal-title">{{ title }}</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">
            <ion-icon name="close-outline" size="large"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="modal-content">
        <p>{{ content }}</p>
      </div>
    </ion-content>
  `,
  styles: [`
    .modal-title {
      font-size: 20px;
      font-weight: 600;
      color: #1e3a5f;
    }
    .modal-content {
      padding: 16px;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .modal-content p {
      color: #333;
      line-height: 1.6;
      font-size: 16px;
      margin: 0;
    }
    ion-toolbar {
      --background: #f5f5f5;
    }
    ion-button {
      --color: #1e3a5f;
    }
  `],
  standalone: true,
  imports: [IonicModule]
})
class SpotDetailsModal {
  title: string = '';
  content: string = '';

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}