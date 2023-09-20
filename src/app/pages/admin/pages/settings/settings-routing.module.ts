import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
  },
  {
    path: 'general',
    loadChildren: () =>
      import('./general/general.module').then((m) => m.GeneralModule),
  },
  {
    path: 'security',
    loadChildren: () =>
      import('./security/security.module').then((m) => m.SecurityModule),
  },
  {
    path: 'update',
    loadChildren: () =>
      import('./update/update.module').then((m) => m.UpdateModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
