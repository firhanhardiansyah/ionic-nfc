import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NdefListenerPageRoutingModule } from './ndef-listener-routing.module';

import { NdefListenerPage } from './ndef-listener.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NdefListenerPageRoutingModule
  ],
  declarations: [NdefListenerPage]
})
export class NdefListenerPageModule {}
