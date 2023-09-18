import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { UpdatePage } from './update.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePage,
  },
  {
    path: 'actions',
    loadChildren: () =>
      import('./actions/actions.module').then((m) => m.ActionsModule),
  },
  {
    path: 'changelogs',
    loadChildren: () =>
      import('./changelogs/changelogs.module').then((m) => m.ChangelogsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateRoutingModule {}
