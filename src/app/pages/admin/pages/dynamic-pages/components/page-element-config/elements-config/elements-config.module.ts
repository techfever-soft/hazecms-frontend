import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardElementConfigComponent } from './containers/card-element-config/card-element-config.component';
import { CommonModule } from '@angular/common';
import { FormattedTextElementConfigComponent } from './base/formatted-text-element-config/formatted-text-element-config.component';
import { ListElementConfigComponent } from './base/list-element-config/list-element-config.component';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { ParagraphElementConfigComponent } from './base/paragraph-element-config/paragraph-element-config.component';
import { TitleElementConfigComponent } from './base/title-element-config/title-element-config.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [
    // NOTE: BASE ELEMENTS
    TitleElementConfigComponent,
    ParagraphElementConfigComponent,
    FormattedTextElementConfigComponent,
    ListElementConfigComponent,
    // NOTE: CONTAINER ELEMENTS
    CardElementConfigComponent,
  ],
  exports: [
    // NOTE: BASE ELEMENTS
    TitleElementConfigComponent,
    ParagraphElementConfigComponent,
    FormattedTextElementConfigComponent,
    ListElementConfigComponent,

    // NOTE: CONTAINER ELEMENTS
    CardElementConfigComponent,
  ],
})
export class ElementsConfigModule {}
