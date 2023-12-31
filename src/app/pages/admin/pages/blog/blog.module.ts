import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogPage } from './blog.page';
import { BlogRoutingModule } from './blog-routing.module';
import { CategoriesDialogComponent } from './categories-dialog/categories-dialog.component';
import { CommonModule } from '@angular/common';
import { EditPage } from './edit/edit.page';
import { MaterialModule } from 'src/app/material.module';
import { MomentModule } from 'ngx-moment';
import { NgModule } from '@angular/core';
import { NgxEditorModule } from 'ngx-editor';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewPage } from './view/view.page';
import { WritePostPage } from './write-post/write-post.page';
import { AdminComponentsModule } from '../../components/admin-components.module';

@NgModule({
  declarations: [
    BlogPage,
    WritePostPage,
    ViewPage,
    EditPage,
    CategoriesDialogComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AdminComponentsModule,
    MaterialModule,
    NgxSkeletonLoaderModule,
    NgxEditorModule,
    MomentModule,
  ],
})
export class BlogModule {}
