import { RouterModule, Routes } from '@angular/router';

import { InstallPage } from './install.page';
import { NgModule } from '@angular/core';
import { StepsPage } from './steps/steps.page';

const routes: Routes = [
  {
    path: '',
    component: InstallPage,
  },
  {
    path: 'steps',
    component: StepsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallRoutingModule {}
