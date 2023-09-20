import { AdminComponentsModule } from '../../components/admin-components.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { StatisticsPage } from './statistics.page';
import { StatisticsRoutingModule } from './statistics-routing.module';

@NgModule({
  declarations: [StatisticsPage],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    MaterialModule,
    AdminComponentsModule,
  ],
})
export class StatisticsModule {}
