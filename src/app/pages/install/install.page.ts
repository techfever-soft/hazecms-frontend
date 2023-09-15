import { Component } from '@angular/core';
import { UpdateService } from 'src/app/core/services/update.service';

@Component({
  selector: 'app-install',
  templateUrl: './install.page.html',
  styleUrls: ['./install.page.scss'],
})
export class InstallPage {
  public requirementsShowed: boolean = false;
  public resourcesShowed: boolean = false;
  public hazeVersion: string = '';

  constructor(private updateService: UpdateService) {
    this.updateService.getCurrentVersionTag().subscribe((versionTag) => {
      this.hazeVersion = versionTag;
    });
  }
}
