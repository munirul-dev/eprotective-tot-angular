import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // Simple toggle for demonstration
  private isAuthenticated = true;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.isAuthenticated) {
      return true;
    } else {
      alert('Access Denied: You are not authenticated! (Check AuthGuard)');
      return false;
    }
  }

  // Method to toggle state for demo purposes
  toggleAuth() {
    this.isAuthenticated = !this.isAuthenticated;
    alert(`User is now ${this.isAuthenticated ? 'Authenticated' : 'Not Authenticated'}`);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
