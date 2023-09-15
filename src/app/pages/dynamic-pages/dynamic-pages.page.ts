import { NavigationEnd, Router } from '@angular/router';

import { ClientApiService } from 'src/app/core/services/client-api.service';
import { Component } from '@angular/core';
import { DataResponse } from 'src/app/core/models/interfaces/responses.interface';

@Component({
  selector: 'app-dynamic-pages',
  templateUrl: './dynamic-pages.page.html',
  styleUrls: ['./dynamic-pages.page.scss'],
})
export class DynamicPagesPage {
  public currentPath: string = '/';
  public pageData: any;
  public pageTitle: string = '';

  constructor(
    private router: Router,
    private clientApiService: ClientApiService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = event.url;
        this.handleDynamicPageRoute(this.currentPath);
      }
    });
  }

  private buildUrl(splittedUrl: string[]) {
    let newUrl = '';
    for (let i = 0; i < splittedUrl.length; i++) {
      newUrl = newUrl + (i >= 1 ? '/' : '') + splittedUrl[i];
    }
    return newUrl;
  }

  private handleDynamicPageRoute(url: string) {
    const splittedUrl = url.split('/');
    splittedUrl.splice(0, 1);

    const urlWithoutTrailingSlash = this.buildUrl(splittedUrl);
    const firstUrlParam = splittedUrl[0];
    const lastUrlParam = splittedUrl[splittedUrl.length - 1];

    this.clientApiService
      .getRequest('pages/getOne', {
        path: urlWithoutTrailingSlash,
      })
      .then((res) => {
        const result = res as DataResponse;
        this.pageData = result.data[0];
        this.pageTitle = lastUrlParam;

        if (this.pageData) {
          if (this.pageData.disabled) {
            this.router.navigate(['/errors/not-found']);
          }
        } else {
          // NOTE: Redirect to 404 only if it's a unknown route
          const isRouteValid = this.router.config.some(
            (route) => route.path === firstUrlParam
          );

          if (!isRouteValid) {
            this.router.navigate(['/errors/not-found']);
          }
        }
      });
  }
}
