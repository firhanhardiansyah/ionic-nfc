import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NdefListenerPage } from './ndef-listener.page';

const routes: Routes = [
  {
    path: '',
    component: NdefListenerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NdefListenerPageRoutingModule {}
