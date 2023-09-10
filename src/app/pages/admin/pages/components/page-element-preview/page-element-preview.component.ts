import { Component, OnInit } from '@angular/core';

import { BuilderService } from 'src/app/core/services/admin/builder.service';

@Component({
  selector: 'app-page-element-preview',
  templateUrl: './page-element-preview.component.html',
  styleUrls: ['./page-element-preview.component.scss'],
})
export class PageElementPreviewComponent implements OnInit {
  public addedElements: any[] = [];

  constructor(private builderService: BuilderService) {
    this.builderService.getAddedElements.subscribe((addedElements) => {
      this.addedElements = addedElements;
    });
  }

  ngOnInit() {}
}
