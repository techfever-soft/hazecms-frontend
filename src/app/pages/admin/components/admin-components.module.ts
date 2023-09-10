import { AdminDrawerComponent } from './admin-drawer/admin-drawer.component';
import { AdminNavlistComponent } from './admin-navlist/admin-navlist.component';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminDrawerComponent, AdminNavlistComponent],
  exports: [AdminDrawerComponent, AdminNavlistComponent],
  imports: [MaterialModule, RouterModule],
})
export class AdminComponentsModule {}
