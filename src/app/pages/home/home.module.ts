import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    HighlightModule
  ]
})
export class HomeModule { }
