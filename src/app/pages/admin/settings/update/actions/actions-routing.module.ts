import { RouterModule, Routes } from '@angular/router';

import { ActionsPage } from './actions.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ActionsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionsRoutingModule {}
