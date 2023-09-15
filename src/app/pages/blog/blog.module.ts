import { BlogPage } from './blog.page';
import { BlogRoutingModule } from './blog-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MomentModule } from 'ngx-moment';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BlogPage],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule,
    SharedModule,
    MomentModule,
  ],
})
export class BlogModule {}
