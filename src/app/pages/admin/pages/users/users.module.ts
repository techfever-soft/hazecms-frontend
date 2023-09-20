import { AdminComponentsModule } from '../../components/admin-components.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { UsersPage } from './users.page';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersPage
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    AdminComponentsModule
  ]
})
export class UsersModule { }
