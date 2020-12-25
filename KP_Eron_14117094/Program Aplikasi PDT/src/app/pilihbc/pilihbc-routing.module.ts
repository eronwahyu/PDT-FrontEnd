import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilihbcPage } from './pilihbc.page';

const routes: Routes = [
  {
    path: '',
    component: PilihbcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilihbcPageRoutingModule {}
