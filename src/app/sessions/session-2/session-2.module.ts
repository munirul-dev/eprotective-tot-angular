import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { Session2Component } from './session-2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  { path: '', component: Session2Component }
];

@NgModule({
  declarations: [
    Session2Component,
    DataBindingComponent,
    DirectivesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    Session2Component
  ]
})
export class Session2Module { }
