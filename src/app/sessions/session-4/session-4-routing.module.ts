import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Session4Component } from './session-4.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: Session4Component,
    children: [
      {
        path: 'detail/:id',
        component: DetailComponent,
        canActivate: [AuthGuard] // Protect this route
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Session4RoutingModule { }
