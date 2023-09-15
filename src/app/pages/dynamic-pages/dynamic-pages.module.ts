import { CommonModule } from '@angular/common';
import { DynamicPagesPage } from './dynamic-pages.page';
import { DynamicPagesRoutingModule } from './dynamic-pages-routing.module';
import { HighlightModule } from 'ngx-highlightjs';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DynamicPagesPage],
  imports: [
    CommonModule,
    DynamicPagesRoutingModule,
    MaterialModule,
    HighlightModule,
  ],
})
export class DynamicPagesModule {}
