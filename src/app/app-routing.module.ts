import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'reader-nfc',
    loadChildren: () =>
      import('./pages/reader-nfc/reader-nfc.module').then((m) => m.ReaderNfcPageModule),
  },
  {
    path: 'write-nfc',
    loadChildren: () =>
      import('./pages/write-nfc/write-nfc.module').then((m) => m.WriteNfcPageModule),
  },
  {
    path: 'ndef-listener',
    loadChildren: () =>
      import('./pages/ndef-listener/ndef-listener.module').then((m) => m.NdefListenerPageModule),
  },
  {
    path: 'tag-technology',
    loadChildren: () => import('./pages/tag-technology/tag-technology.module').then( m => m.TagTechnologyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
