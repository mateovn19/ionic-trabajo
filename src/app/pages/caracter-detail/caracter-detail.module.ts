import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaracterDetailPageRoutingModule } from './caracter-detail-routing.module';

import { CaracterDetailPage } from './caracter-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaracterDetailPageRoutingModule
  ],
  declarations: [CaracterDetailPage]
})
export class CaracterDetailPageModule {}
