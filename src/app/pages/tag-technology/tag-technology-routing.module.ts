import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagTechnologyPage } from './tag-technology.page';

const routes: Routes = [
  {
    path: '',
    component: TagTechnologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagTechnologyPageRoutingModule {}
