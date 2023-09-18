import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BuilderElement } from 'src/app/core/models/interfaces/builder.interface';

@Component({
  selector: 'app-formatted-text-element-config',
  templateUrl: './formatted-text-element-config.component.html',
  styleUrls: ['./formatted-text-element-config.component.scss'],
})
export class FormattedTextElementConfigComponent  implements OnInit {
  @Input('element') element!: BuilderElement;
  @Output('formChanged') formChange: EventEmitter<any> =
    new EventEmitter<any>();
    
  constructor() { }

  ngOnInit() {}

}
