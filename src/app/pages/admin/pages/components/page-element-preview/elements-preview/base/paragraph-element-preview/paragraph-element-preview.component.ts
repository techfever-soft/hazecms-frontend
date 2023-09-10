import { BuilderElement, BuilderElementContainer } from 'src/app/core/interfaces/builder.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph-element-preview',
  templateUrl: './paragraph-element-preview.component.html',
  styleUrls: ['./paragraph-element-preview.component.scss'],
})
export class ParagraphElementPreviewComponent  implements OnInit {
  @Input('element') element!: BuilderElement | BuilderElementContainer;

  constructor() { }

  ngOnInit() {}

}
