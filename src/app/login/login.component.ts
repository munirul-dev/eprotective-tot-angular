import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <h2>Login Page</h2>
    <button (click)="login()">Log In</button>
  `,
  standalone: false
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) { }

  login() {
    this.auth.login('fake-jwt-token');
    this.router.navigate(['/courses']);
  }
}
