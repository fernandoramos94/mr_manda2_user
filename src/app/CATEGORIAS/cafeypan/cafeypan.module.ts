import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CafeypanPageRoutingModule } from './cafeypan-routing.module';

import { CafeypanPage } from './cafeypan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CafeypanPageRoutingModule
  ],
  declarations: [CafeypanPage]
})
export class CafeypanPageModule {}
