import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HogaryferreteriaPage } from './hogaryferreteria.page';

const routes: Routes = [
  {
    path: '',
    component: HogaryferreteriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HogaryferreteriaPageRoutingModule {}
