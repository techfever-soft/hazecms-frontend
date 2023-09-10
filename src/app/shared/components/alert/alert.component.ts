import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input('type') type: string = 'default';
  @Input('icon') icon!: string;
  @Input('title') title!: string;
  @Input('subTitle') subTitle!: string;
}
