import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralDataPage } from './general-data.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralDataPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    GeneralDataPage  // import the standalone component here
  ],
  exports: [RouterModule]
})
export class GeneralDataPageModule {}