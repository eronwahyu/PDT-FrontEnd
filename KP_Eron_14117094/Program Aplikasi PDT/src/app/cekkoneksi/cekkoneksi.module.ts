import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CekkoneksiPageRoutingModule } from './cekkoneksi-routing.module';

import { CekkoneksiPage } from './cekkoneksi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CekkoneksiPageRoutingModule
  ],
  declarations: [CekkoneksiPage]
})
export class CekkoneksiPageModule {}
