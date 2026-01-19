import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { Session6Component } from './session-6.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', component: Session6Component }
];

@NgModule({
  declarations: [
    Session6Component,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Important for Reactive Forms
    RouterModule.forChild(routes)
  ],
  exports: [
    Session6Component
  ]
})
export class Session6Module { }
