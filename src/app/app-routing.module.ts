import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Define as rotas da aplicação
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redireciona a rota vazia para a página inicial

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) }, 
  // Carrega o módulo da página inicial

  { path: 'tourist-points', loadChildren: () => import('./tourist-points/tourist-points.module').then(m => m.TouristPointsPageModule) },
   // Carrega o módulo da página de pontos turísticos

  { path: 'gastronomy', loadChildren: () => import('./gastronomy/gastronomy.module').then(m => m.GastronomyPageModule) },
   // Carrega o módulo da página de gastronomia

  { path: 'useful-info', loadChildren: () => import('./useful-info/useful-info.module').then(m => m.UsefulInfoPageModule) }, 
  // Carrega o módulo da página de informação útil

  { path: 'general-data', loadChildren: () => import('./general-data/general-data.module').then(m => m.GeneralDataPageModule) } 
  // Carrega o módulo da página de informações gerais
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })], // Configura o roteamento com pré-carregamento de módulos
  exports: [RouterModule] // Exporta o RouterModule para ser utilizado em outros módulos
})
export class AppRoutingModule { } // Declaração do módulo de roteamento da aplicação