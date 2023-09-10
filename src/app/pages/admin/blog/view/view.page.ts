import { ActivatedRoute } from '@angular/router';
import { ClientApiService } from 'src/app/core/services/client-api.service';
import { Component } from '@angular/core';
import { DataResponse } from 'src/app/core/interfaces/responses.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { HazeBreadcrumbItem } from 'src/app/core/interfaces/breadcrumb.interface';
import { HazePost } from 'src/app/core/interfaces/post.interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage {
  public viewPostRoute: HazeBreadcrumbItem[] = [
    {
      path: '/admin/blog',
      label: 'Blog',
    },
    {
      path: '/admin/blog/view',
      label: 'View a post',
    },
  ];
  public blogPost!: HazePost;
  public postContent: any;
  public postTags: any[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private clientApiService: ClientApiService,
    private domSanitizer: DomSanitizer
  ) {
    this.activeRoute.paramMap.subscribe((params) => {
      const postId = params.get('postId');

      if (postId) {
        this.viewPostRoute[1].path = '/admin/blog/view/' + postId;

        this.clientApiService
          .getRequest('posts/getOne/' + postId, {})
          .then((res) => {
            const response = res as DataResponse;

            const foundPost: HazePost = response.data[0];

            this.blogPost = foundPost;
            this.postContent = domSanitizer.bypassSecurityTrustHtml(
              this.blogPost.content
            );
            this.postTags = JSON.parse(foundPost.tags);
          });
      }
    });
  }
}
