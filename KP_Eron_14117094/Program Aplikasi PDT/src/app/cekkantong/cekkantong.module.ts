import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CekkantongPageRoutingModule } from './cekkantong-routing.module';

import { CekkantongPage } from './cekkantong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CekkantongPageRoutingModule
  ],
  declarations: [CekkantongPage]
})
export class CekkantongPageModule {}
