import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'session-2', loadChildren: () => import('./sessions/session-2/session-2.module').then(m => m.Session2Module) },
  { path: 'session-3', loadChildren: () => import('./sessions/session-3/session-3.module').then(m => m.Session3Module) },
  { path: 'session-4', loadChildren: () => import('./sessions/session-4/session-4.module').then(m => m.Session4Module) },
  { path: '', redirectTo: '/session-2', pathMatch: 'full' }, // Redirect to first session by default
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
