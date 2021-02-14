import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WriteNfcPage } from './write-nfc.page';

const routes: Routes = [
  {
    path: '',
    component: WriteNfcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriteNfcPageRoutingModule {}
