import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilihgudangPageRoutingModule } from './pilihgudang-routing.module';

import { PilihgudangPage } from './pilihgudang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilihgudangPageRoutingModule
  ],
  declarations: [PilihgudangPage]
})
export class PilihgudangPageModule {}
