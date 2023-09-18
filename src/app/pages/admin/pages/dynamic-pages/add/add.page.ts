import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { BuilderService } from 'src/app/core/services/admin/builder.service';
import { HazeBreadcrumbItem } from 'src/app/core/models/interfaces/breadcrumb.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  public addPageRoute: HazeBreadcrumbItem[] = [
    {
      path: '/admin/dynamic-pages',
      label: 'Pages',
    },
    {
      path: '/admin/dynamic-pages/add',
      label: 'Add a page',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
