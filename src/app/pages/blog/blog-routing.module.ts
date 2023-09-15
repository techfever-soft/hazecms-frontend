import { RouterModule, Routes } from '@angular/router';

import { BlogPage } from './blog.page';
import { NgModule } from '@angular/core';
import { PostPage } from './post/post.page';

const routes: Routes = [
  {
    path: '',
    component: BlogPage,
  },
  {
    path: 'post/:postSlug',
    loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
