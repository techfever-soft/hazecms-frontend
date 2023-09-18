import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
