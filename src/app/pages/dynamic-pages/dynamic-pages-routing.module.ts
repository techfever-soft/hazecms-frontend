import { RouterModule, Routes } from '@angular/router';

import { DynamicPagesPage } from './dynamic-pages.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DynamicPagesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicPagesRoutingModule {}
