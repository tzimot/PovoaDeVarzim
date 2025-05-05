import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TouristPointsPage } from './tourist-points.page';

const routes: Routes = [
  {
    path: '',
    component: TouristPointsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TouristPointsPageRoutingModule {}
