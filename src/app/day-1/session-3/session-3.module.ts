import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Session3Component } from './session-3.component';
import { AsyncObservableComponent } from './async-observable/async-observable.component';
import { HttpClientDemoComponent } from './http-client-demo/http-client-demo.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';

const routes: Routes = [
  { path: '', component: Session3Component }
];

@NgModule({
  declarations: [
    Session3Component,
    AsyncObservableComponent,
    HttpClientDemoComponent,
    RxjsOperatorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    Session3Component
  ]
})
export class Session3Module { }
