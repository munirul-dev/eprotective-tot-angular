import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Session7Component } from './session-7.component';
import { CounterComponent } from './counter/counter.component';
import { DebuggingDashboardComponent } from './debugging/debugging-dashboard/debugging-dashboard.component';
import { RuntimeErrorComponent } from './debugging/runtime-error/runtime-error.component';
import { MemoryLeakComponent } from './debugging/memory-leak/memory-leak.component';
import { SlowComponentComponent } from './debugging/slow-component/slow-component.component';

const routes: Routes = [
  { path: '', component: Session7Component }
];

@NgModule({
  declarations: [
    Session7Component,
    CounterComponent,
    DebuggingDashboardComponent,
    RuntimeErrorComponent,
    MemoryLeakComponent,
    SlowComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    Session7Component
  ]
})
export class Session7Module { }
