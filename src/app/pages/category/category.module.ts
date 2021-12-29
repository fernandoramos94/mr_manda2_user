   //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';

import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';


@NgModule({
  entryComponents: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    ComponentsModule,
    NgxIonicImageViewerModule

  ],
  declarations: [CategoryPage]
})
export class CategoryPageModule { }
