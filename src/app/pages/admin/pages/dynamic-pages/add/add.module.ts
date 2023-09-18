import { AddPage } from './add.page';
import { AddPageBuilderComponent } from './add-page-builder/add-page-builder.component';
import { AddPageRoutingModule } from './add-routing.module';
import { AddPageSettingsComponent } from './add-page-settings/add-page-settings.component';
import { AdminComponentsModule } from '../../../components/admin-components.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { ElementsConfigModule } from '../components/page-element-config/elements-config/elements-config.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AddPageRoutingModule,
    MaterialModule,
    ComponentsModule,
    ElementsConfigModule,
    SharedModule,
    AdminComponentsModule,
  ],
  declarations: [AddPage, AddPageBuilderComponent, AddPageSettingsComponent],
})
export class AddPageModule {}
