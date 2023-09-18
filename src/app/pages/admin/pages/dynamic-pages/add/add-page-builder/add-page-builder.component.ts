import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

import { BuilderService } from 'src/app/core/services/admin/builder.service';
import { MatDrawer } from '@angular/material/sidenav';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-add-page-builder',
  templateUrl: './add-page-builder.component.html',
  styleUrls: ['./add-page-builder.component.scss'],
})
export class AddPageBuilderComponent implements OnInit {
  @Input('tabGroup') tabGroup!: MatTabGroup;
  @Input('elementsDrawer') elementsDrawer!: MatDrawer;
  public allSelectedElements: any[] = [];
  public isMobile: boolean = false;

  constructor(private mediaQuery: BreakpointObserver) {}

  ngOnInit() {
    if (this.mediaQuery.isMatched([Breakpoints.XSmall, 'XSmall'])) {
      this.isMobile = true;
    }
  }

  onNextStep() {
    this.tabGroup.selectedIndex = 1;
  }
}
