import { Component } from '@angular/core';
import { HazeBreadcrumbItem } from 'src/app/core/models/interfaces/breadcrumb.interface';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage {
  public updatePageRoute: HazeBreadcrumbItem[] = [
    {
      path: '/admin/settings',
      label: 'Settings',
    },
    {
      path: '/admin/settings/update',
      label: 'Update settings',
    },
  ];
}
