import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilihposPageRoutingModule } from './pilihpos-routing.module';

import { PilihposPage } from './pilihpos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilihposPageRoutingModule
  ],
  declarations: [PilihposPage]
})
export class PilihposPageModule {}
