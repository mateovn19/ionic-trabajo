import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaracterDetailPage } from './caracter-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CaracterDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaracterDetailPageRoutingModule {}
