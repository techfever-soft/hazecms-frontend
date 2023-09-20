import { ClientApiService } from 'src/app/core/services/client-api.service';
import { Component } from '@angular/core';
import { DataResponse } from 'src/app/core/models/interfaces/responses.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  public postsCount: number = 0;
  public pagesCount: number = 0;
  public usersCount: number = 0;

  constructor(private clientApiService: ClientApiService) {
    this.clientApiService.getRequest('posts/getAll', {}).then((response) => {
      const result = response as DataResponse;
      const posts = result.data as any[];

      this.postsCount = posts.length;
    });

    this.clientApiService.getRequest('pages/getAll', {}).then((response) => {
      const result = response as DataResponse;
      const pages = result.data as any[];

      this.pagesCount = pages.length;
    });

    this.clientApiService.getRequest('users/getAll', {}).then((response) => {
      const result = response as DataResponse;
      const users = result.data as any[];

      this.usersCount = users.length;
    });
  }
}
