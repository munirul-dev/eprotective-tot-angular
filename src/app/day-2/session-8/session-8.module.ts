import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { Session8Component } from './session-8.component';

const routes: Routes = [
  { path: '', component: Session8Component }
];

@NgModule({
  declarations: [
    Session8Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    Session8Component
  ]
})
export class Session8Module { }
