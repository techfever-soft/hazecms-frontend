import { ClientApiService } from 'src/app/core/services/client-api.service';
import { Component } from '@angular/core';
import { DataResponse } from 'src/app/core/models/interfaces/responses.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage {
  public blogArticles: any[] = [];

  constructor(private clientApiService: ClientApiService) {
    this.clientApiService.getRequest('posts/getAll', {}).then((response) => {
      const result = response as DataResponse;
      this.blogArticles = result.data as any[];
    });
  }
}
