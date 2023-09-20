import { Component } from '@angular/core';
import { HazeBreadcrumbItem } from 'src/app/core/models/interfaces/breadcrumb.interface';

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss']
})
export class GeneralPage {
  public generalPageRoute: HazeBreadcrumbItem[] = [
    {
      path: '/admin/settings',
      label: 'Settings',
    },
    {
      path: '/admin/settings/general',
      label: 'General settings',
    },
  ];
}
