import { Component, Input, OnInit } from '@angular/core';

import { BuilderService } from 'src/app/core/services/admin/builder.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-page-element-list',
  templateUrl: './page-element-list.component.html',
  styleUrls: ['./page-element-list.component.scss'],
})
export class PageElementListComponent implements OnInit {
  @Input('drawer') drawer!: MatDrawer;
  @Input('keepOpened') keepOpened: boolean = false;
  public allSelectedElements: any[] = [];

  constructor(private builderService: BuilderService) {
    this.builderService.getAllSelectedElements.subscribe((selectedElements) => {
      this.allSelectedElements = selectedElements;
    });
  }

  ngOnInit() {}

  public onAddSelectedElements() {
    this.builderService.addSelectedElements();
    if (!this.keepOpened) {
      this.drawer.close();
    }
  }

  public onClearSelectedElements() {
    this.builderService.clearSelectedElements();
  }
}
