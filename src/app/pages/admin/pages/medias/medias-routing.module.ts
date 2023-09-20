import { RouterModule, Routes } from '@angular/router';

import { MediasPage } from './medias.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MediasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediasRoutingModule { }
