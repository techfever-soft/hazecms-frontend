import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseElementComponent } from './page-element-list/base-element/base-element.component';
import { CommonModule } from '@angular/common';
import { ContainerElementComponent } from './page-element-list/container-element/container-element.component';
import { ElementsConfigModule } from './page-element-config/elements-config/elements-config.module';
import { ElementsPreviewModule } from './page-element-preview/elements-preview/elements-preview.module';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { PageBuilderComponent } from './page-builder/page-builder.component';
import { PageElementConfigComponent } from './page-element-config/page-element-config.component';
import { PageElementListComponent } from './page-element-list/page-element-list.component';
import { PageElementPreviewComponent } from './page-element-preview/page-element-preview.component';
import { PageNestedElementComponent } from './page-builder/page-nested-element/page-nested-element.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    ElementsConfigModule,
    ElementsPreviewModule,
  ],
  declarations: [
    PageElementListComponent,
    PageBuilderComponent,
    BaseElementComponent,
    ContainerElementComponent,
    PageNestedElementComponent,
    PageElementPreviewComponent,
    PageElementConfigComponent,
  ],
  exports: [
    PageElementListComponent,
    PageBuilderComponent,
    BaseElementComponent,
    ContainerElementComponent,
    PageNestedElementComponent,
    PageElementPreviewComponent,
    PageElementConfigComponent,
  ],
})
export class ComponentsModule {}
