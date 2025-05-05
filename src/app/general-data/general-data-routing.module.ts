import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

import { GeneralDataPage } from './general-data.page'; // Importa o componente da página General Data

// Define as rotas específicas para a página General Data
const routes: Routes = [
  {
    path: '', // Rota base para esta página
    component: GeneralDataPage // Associa o componente GeneralDataPage a esta rota
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Configura as rotas como rotas filhas deste módulo
  exports: [RouterModule], 
})
export class GeneralDataPageRoutingModule {} // Declaração do módulo de roteamento para a página General Data