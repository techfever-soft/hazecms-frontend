import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { NotFoundPage } from './not-found/not-found.page';

const routes: Routes = [
  {
    path: 'not-found',
    component: NotFoundPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorsRoutingModule {}
