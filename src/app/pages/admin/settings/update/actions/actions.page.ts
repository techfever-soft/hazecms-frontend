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

  constructor(private updateService: UpdateService) {
    this.updateService.getCurrentVersionTag().subscribe((versionTag) => {
      this.currentVersionTag = versionTag;
    });
    this.updateService.getLatestVersionTag().subscribe((versionTag) => {
      this.lastVersionTag = versionTag;
    });
  }
}
