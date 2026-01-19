import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    // Redirect to login (assuming login route exists or will exist)
    // For now, redirect to home or maintain PDF logic
    this.router.navigate(['/login']);
    return false;
  }
}
