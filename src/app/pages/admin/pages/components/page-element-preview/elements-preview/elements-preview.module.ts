import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParagraphElementPreviewComponent } from './base/paragraph-element-preview/paragraph-element-preview.component';
import { TitleElementPreviewComponent } from './base/title-element-preview/title-element-preview.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TitleElementPreviewComponent,
    ParagraphElementPreviewComponent,
  ],
  exports: [TitleElementPreviewComponent, ParagraphElementPreviewComponent],
})
export class ElementsPreviewModule {}
