import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilihgudangPage } from './pilihgudang.page';

const routes: Routes = [
  {
    path: '',
    component: PilihgudangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilihgudangPageRoutingModule {}
