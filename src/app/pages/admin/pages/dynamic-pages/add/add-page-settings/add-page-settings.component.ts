import { Component, Input, OnInit } from '@angular/core';

import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-add-page-settings',
  templateUrl: './add-page-settings.component.html',
  styleUrls: ['./add-page-settings.component.scss'],
})
export class AddPageSettingsComponent implements OnInit {
  @Input('tabGroup') tabGroup!: MatTabGroup;

  constructor() {}

  ngOnInit() {}
}
