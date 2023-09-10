import {
  BuilderElement,
  BuilderElementContainer,
} from 'src/app/core/interfaces/builder.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-element-preview',
  templateUrl: './title-element-preview.component.html',
  styleUrls: ['./title-element-preview.component.scss'],
})
export class TitleElementPreviewComponent implements OnInit {
  @Input('element') element!: BuilderElement | BuilderElementContainer;

  constructor() {}

  ngOnInit() {}
}
