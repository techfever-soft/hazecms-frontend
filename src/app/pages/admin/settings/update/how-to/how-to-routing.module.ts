import { RouterModule, Routes } from '@angular/router';

import { HowToPage } from './how-to.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: HowToPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowToRoutingModule {}
