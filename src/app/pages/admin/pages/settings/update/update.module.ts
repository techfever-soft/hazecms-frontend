import { AdminComponentsModule } from '../../../components/admin-components.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UpdatePage } from './update.page';
import { UpdateRoutingModule } from './update-routing.module';

@NgModule({
  declarations: [UpdatePage],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    MaterialModule,
    AdminComponentsModule,
    SharedModule,
  ],
})
export class UpdateModule {}
