import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.scss'],
})
export class FlashMessageComponent {
  @Input('message') public message!: string | undefined;
  @Input('type') public type!: string;
  public isVisible: boolean = true;

  constructor() {}

  public remove() {
    this.isVisible = false;
  }
}
