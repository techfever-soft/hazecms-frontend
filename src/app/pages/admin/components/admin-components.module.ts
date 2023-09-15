import { AdminDrawerComponent } from './admin-drawer/admin-drawer.component';
import { AdminNavlistComponent } from './admin-navlist/admin-navlist.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminDrawerComponent, AdminNavlistComponent],
  imports: [CommonModule, MaterialModule, RouterModule, SharedModule],
  exports: [AdminDrawerComponent, AdminNavlistComponent],
})
export class AdminComponentsModule {}
