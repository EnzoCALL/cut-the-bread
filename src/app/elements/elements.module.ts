import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElementsPageRoutingModule } from './elements-routing.module';

import { ElementsPage } from './elements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElementsPageRoutingModule
  ],
  declarations: [ElementsPage]
})
export class ElementsPageModule {}
