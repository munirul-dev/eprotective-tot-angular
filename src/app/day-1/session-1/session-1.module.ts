import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Session1Component } from './session-1.component';

const routes: Routes = [
  { path: '', component: Session1Component }
];

@NgModule({
  declarations: [
    Session1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    Session1Component
  ]
})
export class Session1Module { }
