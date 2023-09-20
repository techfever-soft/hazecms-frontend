import { AdminComponentsModule } from '../../../components/admin-components.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { SecurityPage } from './security.page';
import { SecurityRoutingModule } from './security-routing.module';

@NgModule({
  declarations: [
    SecurityPage
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MaterialModule,
    AdminComponentsModule
  ]
})
export class SecurityModule { }
