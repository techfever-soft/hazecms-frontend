import { AdminComponentsModule } from '../../../components/admin-components.module';
import { CommonModule } from '@angular/common';
import { GeneralPage } from './general.page';
import { GeneralRoutingModule } from './general-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GeneralPage],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    MaterialModule,
    AdminComponentsModule,
    SharedModule,
  ],
})
export class GeneralModule {}
