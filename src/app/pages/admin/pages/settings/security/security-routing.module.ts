import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SecurityPage } from './security.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}
