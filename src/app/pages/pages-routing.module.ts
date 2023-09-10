import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home/home.page';
import { InstallPage } from './install/install.page';
import { LoginPage } from './auth/login/login.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'install',
    pathMatch: 'full',
  },
  // {
  //   path: '',
  //   component: HomePage,
  // },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'install',
    loadChildren: () =>
      import('./install/install.module').then((m) => m.InstallModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
