import { AdminComponentsModule } from 'src/app/pages/admin/components/admin-components.module';
import { ChangelogsPage } from './changelogs.page';
import { ChangelogsRoutingModule } from './changelogs-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MomentModule } from 'ngx-moment';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ChangelogsPage],
  imports: [
    CommonModule,
    ChangelogsRoutingModule,
    MaterialModule,
    SharedModule,
    AdminComponentsModule,
    MomentModule,
  ],
})
export class ChangelogsModule {}
