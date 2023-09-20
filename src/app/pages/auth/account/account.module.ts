import { AccountPage } from './account.page';
import { AccountRoutingModule } from './account-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AccountPage
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule
  ]
})
export class AccountModule { }
