import { AdminComponentsModule } from '../components/admin-components.module';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './dashboard.page';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
    declarations: [DashboardPage],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MaterialModule,
        AdminComponentsModule,
        SharedModule
    ]
})
export class DashboardModule {}
