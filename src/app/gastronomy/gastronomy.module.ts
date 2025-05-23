import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastronomyPage } from './gastronomy.page';

const routes: Routes = [
  {
    path: '',
    component: GastronomyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GastronomyPageModule {}