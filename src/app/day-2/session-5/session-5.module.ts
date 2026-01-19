import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Session5Component } from './session-5.component';

const routes: Routes = [
  { path: '', component: Session5Component }
];

@NgModule({
  declarations: [
    Session5Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    Session5Component
  ]
})
export class Session5Module { }
