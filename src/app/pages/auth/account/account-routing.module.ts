import { RouterModule, Routes } from '@angular/router';

import { AccountPage } from './account.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AccountPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
