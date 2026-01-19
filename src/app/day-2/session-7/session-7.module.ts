import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Session7Component } from './session-7.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  { path: '', component: Session7Component }
];

@NgModule({
  declarations: [
    Session7Component,
    CounterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    Session7Component
  ]
})
export class Session7Module { }
