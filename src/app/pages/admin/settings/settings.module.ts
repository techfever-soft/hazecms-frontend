import { AdminComponentsModule } from '../components/admin-components.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { SettingsPage } from './settings.page';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [SettingsPage],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule,
    AdminComponentsModule,
  ],
})
export class SettingsModule {}
