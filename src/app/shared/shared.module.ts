import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FlashMessageComponent } from './components/flash-message/flash-message.component';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    FlashMessageComponent,
    AlertComponent
  ],
  exports: [
    BreadcrumbComponent,
    FlashMessageComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})
export class SharedModule { }
