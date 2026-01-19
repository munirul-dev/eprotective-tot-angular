import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Session4RoutingModule } from './session-4-routing.module';
import { Session4Component } from './session-4.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    Session4Component,
    DetailComponent
  ],
  imports: [
    CommonModule,
    Session4RoutingModule
  ]
})
export class Session4Module { }
