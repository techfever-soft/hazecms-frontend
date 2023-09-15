import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MomentModule } from 'ngx-moment';
import { NgModule } from '@angular/core';
import { PostPage } from './post.page';
import { PostRoutingModule } from './post-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PostPage],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule,
    SharedModule,
    MomentModule,
  ],
})
export class PostModule {}
