import { AdminComponentsModule } from '../../components/admin-components.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { PagesPage } from './pages.page';
import { PagesPageRoutingModule } from './pages-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesPageRoutingModule,
    AdminComponentsModule,
    MaterialModule,
    SharedModule,
    ComponentsModule
  ],
  declarations: [PagesPage],
})
export class PagesPageModule {}
