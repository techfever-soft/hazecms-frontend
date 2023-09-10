import { Component } from '@angular/core';

@Component({
  selector: 'app-install',
  templateUrl: './install.page.html',
  styleUrls: ['./install.page.scss'],
})
export class InstallPage {
  public requirementsShowed: boolean = false;
  public resourcesShowed: boolean = false;
}
