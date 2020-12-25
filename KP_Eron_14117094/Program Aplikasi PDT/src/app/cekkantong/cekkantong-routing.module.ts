import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CekkantongPage } from './cekkantong.page';

const routes: Routes = [
  {
    path: '',
    component: CekkantongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CekkantongPageRoutingModule {}
