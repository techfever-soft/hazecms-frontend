import { AdminComponentsModule } from '../../components/admin-components.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MediasPage } from './medias.page';
import { MediasRoutingModule } from './medias-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [MediasPage],
  imports: [
    CommonModule,
    MediasRoutingModule,
    MaterialModule,
    AdminComponentsModule,
  ],
})
export class MediasModule {}
