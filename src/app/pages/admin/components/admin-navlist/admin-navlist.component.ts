import { AdminService } from 'src/app/core/services/admin/admin.service';
import { Component } from '@angular/core';
import { UpdateService } from 'src/app/core/services/update.service';
import { expandableItem } from 'src/app/shared/animations/expand.animation';

@Component({
  selector: 'app-admin-navlist',
  templateUrl: './admin-navlist.component.html',
  styleUrls: ['./admin-navlist.component.scss'],
  animations: [expandableItem]
})
export class AdminNavlistComponent {
  public navlistShowed: boolean = false;
  public isUpdateReady: boolean = false;
  public latestVersionTag!: string;
  public currentVersionTag!: string;

  constructor(
    private adminService: AdminService,
    private updateService: UpdateService
  ) {
    this.adminService.isMenuOpened.subscribe((menuOpened) => {
      this.navlistShowed = menuOpened;
    });

    this.updateService.getIsUpdateReady().subscribe((ready) => {
      this.isUpdateReady = ready;
    });

    this.updateService.getLatestVersionTag().subscribe((latestVersionTag) => {
      this.latestVersionTag = latestVersionTag;
    });

    this.updateService.getCurrentVersionTag().subscribe((currentVersionTag) => {
      this.currentVersionTag = currentVersionTag;
    });
  }

  public toggleNavlist() {
    this.adminService.setMenuOpened(!this.navlistShowed);
  }
}
