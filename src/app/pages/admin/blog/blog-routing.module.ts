import { RouterModule, Routes } from '@angular/router';

import { BlogPage } from './blog.page';
import { EditPage } from './edit/edit.page';
import { NgModule } from '@angular/core';
import { ViewPage } from './view/view.page';
import { WritePostPage } from './write-post/write-post.page';

const routes: Routes = [
  {
    path: '',
    component: BlogPage,
  },
  {
    path: 'write',
    component: WritePostPage,
  },
  {
    path: 'view/:postId',
    component: ViewPage,
  },
  {
    path: 'edit/:postId',
    component: EditPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
