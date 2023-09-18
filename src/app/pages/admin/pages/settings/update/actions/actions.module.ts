import { ActionsPage } from './actions.page';
import { ActionsRoutingModule } from './actions-routing.module';
import { AdminComponentsModule } from 'src/app/pages/admin/components/admin-components.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ActionsPage],
  imports: [
    CommonModule,
    ActionsRoutingModule,
    AdminComponentsModule,
    MaterialModule,
    SharedModule,
  ],
})
export class ActionsModule {}
