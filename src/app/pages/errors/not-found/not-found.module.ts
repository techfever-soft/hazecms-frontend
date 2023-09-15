import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundPage } from './not-found.page';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
  declarations: [NotFoundPage],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
