import { AdminComponentsModule } from '../../../components/admin-components.module';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { HowToPage } from './how-to.page';
import { HowToRoutingModule } from './how-to-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  declarations: [HowToPage],
  imports: [
    CommonModule,
    HowToRoutingModule,
    AdminComponentsModule,
    MaterialModule,
    SharedModule,
    HighlightModule
  ],
})
export class HowToModule {}
