import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LoginPage } from './login.page';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MaterialModule,
  ]
})
export class LoginModule { }
