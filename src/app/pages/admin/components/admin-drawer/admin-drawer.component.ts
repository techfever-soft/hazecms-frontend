import { AdminService } from 'src/app/core/services/admin/admin.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-drawer',
  templateUrl: './admin-drawer.component.html',
  styleUrls: ['./admin-drawer.component.scss'],
})
export class AdminDrawerComponent {
  public isDrawerOpened: boolean = false;

  constructor(private adminService: AdminService) {
    this.adminService.isDrawerOpened.subscribe((opened) => {
      this.isDrawerOpened = opened;
    });
  }

  onToggleDrawer() {
    this.adminService.setDrawerOpened(!this.isDrawerOpened);
  }
}
