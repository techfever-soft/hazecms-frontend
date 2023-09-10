import { Component, Input, OnInit } from '@angular/core';

import { BuilderService } from 'src/app/core/services/admin/builder.service';

@Component({
  selector: 'app-page-nested-element',
  templateUrl: './page-nested-element.component.html',
  styleUrls: ['./page-nested-element.component.scss'],
})
export class PageNestedElementComponent implements OnInit {
  @Input() elements: any[] = [];
  public selectedElements: any[] = [];

  constructor(private builderService: BuilderService) {
    this.builderService.getSelectedBaseElements.subscribe(
      (selectedElements) => {
        this.selectedElements = selectedElements;
      }
    );
  }

  ngOnInit() {}

  onAddNestedElement(element: any) {
    this.builderService.addNestedElementTo(element);
  }
}
