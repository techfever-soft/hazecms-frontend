import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'install',
    pathMatch: 'full',
  },

  // NOTE: START To remove after install
  {
    path: 'install',
    loadChildren: () =>
      import('./pages/install/install.module').then((m) => m.InstallModule),
  },
  // NOTE: END To remove after install

  /**
   * ANCHOR: START Your App Routes
   */
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'errors',
    loadChildren: () =>
      import('./pages/errors/errors.module').then((m) => m.ErrorsModule),
  },
  /**
   * ANCHOR: END Your App Routes
   */

  // NOTE: Dynamic Pages Routing
  {
    path: '**',
    loadChildren: () =>
      import('./pages/dynamic-pages/dynamic-pages.module').then(
        (m) => m.DynamicPagesModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
