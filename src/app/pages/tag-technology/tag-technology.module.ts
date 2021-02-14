import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TagTechnologyPageRoutingModule } from './tag-technology-routing.module';

import { TagTechnologyPage } from './tag-technology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagTechnologyPageRoutingModule
  ],
  declarations: [TagTechnologyPage]
})
export class TagTechnologyPageModule {}
