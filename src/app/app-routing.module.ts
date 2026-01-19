import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  // Day 1
  { path: 'session-1', loadChildren: () => import('./day-1/session-1/session-1.module').then(m => m.Session1Module) },
  { path: 'session-2', loadChildren: () => import('./day-1/session-2/session-2.module').then(m => m.Session2Module) },
  { path: 'session-3', loadChildren: () => import('./day-1/session-3/session-3.module').then(m => m.Session3Module) },
  { path: 'session-4', loadChildren: () => import('./day-1/session-4/session-4.module').then(m => m.Session4Module) },

  // Day 2
  { path: 'session-5', loadChildren: () => import('./day-2/session-5/session-5.module').then(m => m.Session5Module) },
  { path: 'session-6', loadChildren: () => import('./day-2/session-6/session-6.module').then(m => m.Session6Module) },
  { path: 'session-7', loadChildren: () => import('./day-2/session-7/session-7.module').then(m => m.Session7Module) },
  { path: 'session-8', loadChildren: () => import('./day-2/session-8/session-8.module').then(m => m.Session8Module) },

  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, // Default to Home
  // { path: '', redirectTo: '/session-1', pathMatch: 'full' }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
