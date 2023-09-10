import {
  BasicResponse,
  DataResponse,
} from 'src/app/core/models/interfaces/responses.interface';

import { CategoriesDialogComponent } from './categories-dialog/categories-dialog.component';
import { ClientApiService } from 'src/app/core/services/client-api.service';
import { Component } from '@angular/core';
import { HazePost } from 'src/app/core/models/interfaces/post.interface';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage {
  public postsList: HazePost[] = [];
  public postsStatus!: DataResponse | null;
  public isPostsLoading: boolean = true;

  constructor(
    private clientApiService: ClientApiService,
    private matDialog: MatDialog
  ) {
    this.loadPosts();
  }

  public loadPosts() {
    this.isPostsLoading = true;

    this.postsStatus = null;
    this.postsList = [];

    this.clientApiService
      .getRequest('posts/getAll', {})
      .then((response) => {
        const posts = response as DataResponse;

        this.isPostsLoading = false;
        this.postsList = posts.data as HazePost[];
      })
      .catch((e) => {
        this.isPostsLoading = false;
        this.postsStatus = e;
      });
  }

  public onDeletePost(postId: string | number) {
    this.clientApiService
      .deleteRequest('posts/deleteOne/' + postId)
      .then((response) => {
        const result = response as BasicResponse;

        console.log(result);

        this.loadPosts();
      })
      .catch((e) => {
        this.postsStatus = e;
      });
  }

  public onOpenCategoriesDialog() {
    this.matDialog.open(CategoriesDialogComponent);
  }
}
