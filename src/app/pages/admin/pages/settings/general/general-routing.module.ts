import { RouterModule, Routes } from '@angular/router';

import { GeneralPage } from './general.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: GeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
