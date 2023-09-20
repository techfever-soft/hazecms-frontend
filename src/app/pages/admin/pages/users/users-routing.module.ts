import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { UsersPage } from './users.page';

const routes: Routes = [
  {
    path: '',
    component: UsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
