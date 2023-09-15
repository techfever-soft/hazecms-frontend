import { ActivatedRoute } from '@angular/router';
import { ClientApiService } from 'src/app/core/services/client-api.service';
import { Component } from '@angular/core';
import { DataResponse } from 'src/app/core/models/interfaces/responses.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage {
  public post: any;
  public postContent: any;

  constructor(
    private clientApiService: ClientApiService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.clientApiService
        .getRequest('posts/getOneBySlug', {
          postSlug: params.get('postSlug'),
        })
        .then((response) => {
          const result = response as DataResponse;
          const post = result.data[0] as any;
          this.post = post;
          this.postContent = this.sanitizer.bypassSecurityTrustHtml(
            post.content
          );
        });
    });
  }
}
