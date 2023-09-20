import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { RegisterPage } from './register.page';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [
    RegisterPage
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
