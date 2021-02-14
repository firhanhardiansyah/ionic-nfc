import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReaderNfcPage } from './reader-nfc.page';

const routes: Routes = [
  {
    path: '',
    component: ReaderNfcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReaderNfcPageRoutingModule {}
