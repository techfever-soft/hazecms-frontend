import { Component, Input } from '@angular/core';

import { HazeBreadcrumbItem } from 'src/app/core/interfaces/breadcrumb.interface';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input('type') type: string = 'button';
  @Input('route') route!: HazeBreadcrumbItem[];
}
