import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CekkoneksiPage } from './cekkoneksi.page';

const routes: Routes = [
  {
    path: '',
    component: CekkoneksiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CekkoneksiPageRoutingModule {}
