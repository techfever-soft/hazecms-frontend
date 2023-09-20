import { Component } from '@angular/core';
import { UpdateService } from 'src/app/core/services/update.service';
import { expandableItem } from 'src/app/shared/animations/expand.animation';

@Component({
  selector: 'app-install',
  templateUrl: './install.page.html',
  styleUrls: ['./install.page.scss'],
  animations: [expandableItem]
})
export class InstallPage {
  public requirementsShowed: boolean = false;
  public resourcesShowed: boolean = false;
  public hazeVersionTag: string = '';

  constructor(private updateService: UpdateService) {
    this.updateService.getCurrentVersionTag().subscribe((versionTag) => {
      this.hazeVersionTag = versionTag;
    });
  }
}
