import { AdminService } from 'src/app/core/services/admin/admin.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-navlist',
  templateUrl: './admin-navlist.component.html',
  styleUrls: ['./admin-navlist.component.scss'],
})
export class AdminNavlistComponent {
  public navlistShowed: boolean = false;

  constructor(private adminService: AdminService) {
    this.adminService.isMenuOpened.subscribe((menuOpened) => {
      this.navlistShowed = menuOpened;
    });
  }

  public toggleNavlist() {
    this.adminService.setMenuOpened(!this.navlistShowed);
  }
}
