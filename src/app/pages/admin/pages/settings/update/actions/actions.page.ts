import { BasicResponse } from 'src/app/core/models/interfaces/responses.interface';
import { ClientApiService } from 'src/app/core/services/client-api.service';
import { Component } from '@angular/core';
import { HazeBreadcrumbItem } from 'src/app/core/models/interfaces/breadcrumb.interface';
import { UpdateService } from 'src/app/core/services/update.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage {
  public actionsPageRoute: HazeBreadcrumbItem[] = [
    {
      path: '/admin/settings',
      label: 'Settings',
    },
    {
      path: '/admin/settings/update',
      label: 'Update settings',
    },
    {
      path: '/admin/settings/update/actions',
      label: 'Update the app',
    },
  ];
  public currentVersionTag: string = '';
  public lastVersionTag: string = '';
  public isUpdating: boolean = false;

  constructor(
    private updateService: UpdateService,
    private clientApiService: ClientApiService
  ) {
    this.updateService.getCurrentVersionTag().subscribe((versionTag) => {
      this.currentVersionTag = versionTag;
    });
    this.updateService.getLatestVersionTag().subscribe((versionTag) => {
      this.lastVersionTag = versionTag;
    });
  }

  public onUpdateCMS() {
    this.isUpdating = true;

    this.clientApiService
      .getRequest('updates/updateCMS', {})
      .then((response) => {
        console.log(response);
        const result = response as BasicResponse;

        if (result.type === 'success') {
          this.isUpdating = false;
        }
      })
      .catch((e) => {
          this.isUpdating = false;
          console.log(e);
      });
  }

  public onCheckUpdates() {
    this.updateService.checkForUpdates();
  }
}
