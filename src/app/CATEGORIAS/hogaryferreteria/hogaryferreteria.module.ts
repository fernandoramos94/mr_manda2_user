import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HogaryferreteriaPageRoutingModule } from './hogaryferreteria-routing.module';

import { HogaryferreteriaPage } from './hogaryferreteria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HogaryferreteriaPageRoutingModule
  ],
  declarations: [HogaryferreteriaPage]
})
export class HogaryferreteriaPageModule {}
