import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilihbcPageRoutingModule } from './pilihbc-routing.module';

import { PilihbcPage } from './pilihbc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilihbcPageRoutingModule
  ],
  declarations: [PilihbcPage]
})
export class PilihbcPageModule {}
