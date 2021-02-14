import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReaderNfcPageRoutingModule } from './reader-nfc-routing.module';

import { ReaderNfcPage } from './reader-nfc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReaderNfcPageRoutingModule
  ],
  declarations: [ReaderNfcPage]
})
export class ReaderNfcPageModule {}
