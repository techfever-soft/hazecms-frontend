import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'dynamic-pages',
    loadChildren: () =>
      import('./pages/dynamic-pages/pages.module').then(
        (m) => m.PagesPageModule
      ),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./pages/statistics/statistics.module').then(
        (m) => m.StatisticsModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'medias',
    loadChildren: () =>
      import('./pages/medias/medias.module').then((m) => m.MediasModule),
  },
  // TODO: For next release
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./login/login.module').then((m) => m.LoginModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
