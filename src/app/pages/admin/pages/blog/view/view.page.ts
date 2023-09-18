import { ActivatedRoute } from '@angular/router';
import { ClientApiService } from 'src/app/core/services/client-api.service';
import { Component } from '@angular/core';
import { DataResponse } from 'src/app/core/models/interfaces/responses.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { HazeBreadcrumbItem } from 'src/app/core/models/interfaces/breadcrumb.interface';
import { HazePost } from 'src/app/core/models/interfaces/post.interface';

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
      label: 'Preview a post',
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
            
            this.postContent = this.domSanitizer.bypassSecurityTrustHtml(
              this.blogPost.content
            );
            this.postTags = JSON.parse(foundPost.tags);
          });
      }
    });
  }
}
