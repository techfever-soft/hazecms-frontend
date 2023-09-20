import { Component, OnInit } from '@angular/core';

import { ClientApiService } from 'src/app/core/services/client-api.service';
import { DataResponse } from 'src/app/core/models/interfaces/responses.interface';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {
  public pageList: any[] = [];

  constructor(private clientApiService: ClientApiService) {}

  ngOnInit() {
    this.loadPages();
  }

  public loadPages() {
    this.clientApiService.getRequest('pages/getAll', {}).then((response) => {
      const result = response as DataResponse;
      const pages = result.data as any[];
      this.pageList = pages;
    });
  }

  public onDeletePage(pageId: string | number) {
    this.clientApiService
      .deleteRequest('pages/deleteOne/' + pageId)
      .then((response) => {
        console.log(response);
        this.loadPages();
      });
  }
}
