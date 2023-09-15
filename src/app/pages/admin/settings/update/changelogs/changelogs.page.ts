import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HazeBreadcrumbItem } from 'src/app/core/models/interfaces/breadcrumb.interface';
import { DataResponse } from 'src/app/core/models/interfaces/responses.interface';
import { ServerApiService } from 'src/app/core/services/server-api.service';
import { UpdateService } from 'src/app/core/services/update.service';

import { XMLParser } from 'fast-xml-parser';

@Component({
  selector: 'app-changelogs',
  templateUrl: './changelogs.page.html',
  styleUrls: ['./changelogs.page.scss'],
})
export class ChangelogsPage {
  public changelogsPageRoute: HazeBreadcrumbItem[] = [
    {
      path: '/admin/settings',
      label: 'Settings',
    },
    {
      path: '/admin/settings/update',
      label: 'Update settings',
    },
    {
      path: '/admin/settings/update/changelogs',
      label: 'Changelogs',
    },
  ];
  public lastChanges: string = '';
  public changelogList: any[] = [];

  constructor(
    private updateService: UpdateService,
    private serverAPIService: ServerApiService,
    private http: HttpClient
  ) {
    this.serverAPIService
      .getRequest('version/getChangelogs', {})
      .then((response) => {
        const result = response as DataResponse;
        const changelogUrl = result.data[0] as string;

        this.http
          .get(changelogUrl, {
            responseType: 'text',
          })
          .subscribe((xml) => {
            const parser = new XMLParser();
            const xmlObject = parser.parse(xml);

            const changelogObject = xmlObject.changelogs as any;
            const changelogArray = changelogObject.changelog as any[];
            console.log(changelogArray);

            this.changelogList = changelogArray.sort((a, b) => b.date - a.date);
          });
      });
  }
}
