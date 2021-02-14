import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WriteNfcPageRoutingModule } from './write-nfc-routing.module';

import { WriteNfcPage } from './write-nfc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WriteNfcPageRoutingModule
  ],
  declarations: [WriteNfcPage]
})
export class WriteNfcPageModule {}
