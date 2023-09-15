import { RouterModule, Routes } from '@angular/router';

import { ChangelogsPage } from './changelogs.page';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: ChangelogsPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangelogsRoutingModule {}
