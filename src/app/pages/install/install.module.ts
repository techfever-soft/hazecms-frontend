import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { InstallActivationComponent } from './steps/install-activation/install-activation.component';
import { InstallConfigComponent } from './steps/install-config/install-config.component';
import { InstallDatabaseComponent } from './steps/install-database/install-database.component';
import { InstallFinalizationComponent } from './steps/install-finalization/install-finalization.component';
import { InstallPage } from './install.page';
import { InstallRoutingModule } from './install-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StepsPage } from './steps/steps.page';

@NgModule({
  declarations: [
    InstallPage,
    StepsPage,
    InstallActivationComponent,
    InstallConfigComponent,
    InstallDatabaseComponent,
    InstallFinalizationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InstallRoutingModule,
    MaterialModule,
    SharedModule,
    HighlightModule,
  ],
})
export class InstallModule {}
