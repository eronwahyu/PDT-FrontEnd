import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilihposPage } from './pilihpos.page';

const routes: Routes = [
  {
    path: '',
    component: PilihposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilihposPageRoutingModule {}
