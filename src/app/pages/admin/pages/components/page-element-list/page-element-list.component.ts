import { Component, OnInit } from '@angular/core';

import { BuilderService } from 'src/app/core/services/admin/builder.service';

@Component({
  selector: 'app-page-element-list',
  templateUrl: './page-element-list.component.html',
  styleUrls: ['./page-element-list.component.scss'],
})
export class PageElementListComponent  implements OnInit {
  public allSelectedElements: any[] = [];

  constructor(private builderService: BuilderService) {
    this.builderService.getAllSelectedElements.subscribe(selectedElements => {
      this.allSelectedElements = selectedElements;
    })
   }

  ngOnInit() {}

  public onAddSelectedElements() {
    this.builderService.addSelectedElements();
  }
  
  public onClearSelectedElements() {
    this.builderService.clearSelectedElements();
  }
}
