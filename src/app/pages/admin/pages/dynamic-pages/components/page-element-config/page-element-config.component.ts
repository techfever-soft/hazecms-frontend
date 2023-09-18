import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { BuilderElement } from 'src/app/core/models/interfaces/builder.interface';
import { BuilderService } from 'src/app/core/services/admin/builder.service';

@Component({
  selector: 'app-page-element-config',
  templateUrl: './page-element-config.component.html',
  styleUrls: ['./page-element-config.component.scss'],
})
export class PageElementConfigComponent implements OnInit {
  @Input('element') element!: BuilderElement;

  constructor(private builderService: BuilderService) {}

  ngOnInit() {}

  public onUpdateElementConfig(config: any) {
    this.element.config = config;
    this.builderService.updateAddedElementConfig(this.element, config);
  }
}
