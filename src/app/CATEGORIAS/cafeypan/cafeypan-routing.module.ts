import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CafeypanPage } from './cafeypan.page';

const routes: Routes = [
  {
    path: '',
    component: CafeypanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CafeypanPageRoutingModule {}
