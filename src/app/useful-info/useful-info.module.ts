import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsefulInfoPage } from './useful-info.page';

const routes: Routes = [
  {
    path: '',
    component: UsefulInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsefulInfoPageModule {}