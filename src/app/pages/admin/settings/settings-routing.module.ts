import { RouterModule, Routes } from '@angular/router';

import { HowToPage } from './update/how-to/how-to.page';
import { NgModule } from '@angular/core';
import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
  },
  {
    path: 'update',
    loadChildren: () =>
      import('./update/update.module').then((m) => m.UpdateModule),
  },
  {
    path: 'actions',
    loadChildren: () =>
      import('./update/actions/actions.module').then((m) => m.ActionsModule),
  },
  {
    path: 'changelogs',
    loadChildren: () =>
      import('./update/changelogs/changelogs.module').then(
        (m) => m.ChangelogsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
