import { Component } from '@angular/core';

@Component({
  selector: 'app-session-5',
  standalone: false,
  templateUrl: './session-5.component.html',
  styleUrls: ['./session-5.component.scss']
})
export class Session5Component {
  title = 'Session 5: Authentication (Interactive Demo)';

  // Mock State
  currentUser: any = null;
  isLoading = false;
  errorMessage = '';

  // Form Data
  loginData = {
    email: 'user@demo.com',
    password: ''
  };

  login() {
    this.isLoading = true;
    this.errorMessage = '';

    // Simulate API delay
    setTimeout(() => {
      this.isLoading = false;

      if (this.loginData.email === 'user@demo.com' && this.loginData.password === '123456') {
        // Success
        this.currentUser = {
          name: 'Demo User',
          email: 'user@demo.com',
          role: 'Admin',
          lastLogin: new Date()
        };
      } else {
        // Error
        this.errorMessage = 'Invalid email or password. Try user@demo.com / 123456';
      }
    }, 1000);
  }

  logout() {
    this.currentUser = null;
    this.loginData.password = '';
    this.errorMessage = '';
  }
}
