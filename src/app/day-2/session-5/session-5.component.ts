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
    this.decodedToken = null;
    this.showToken = false;
  }

  // --- Interactive Demo Features ---

  showToken = false;
  decodedToken: any = null;
  mockTokenString = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRlbW8gVXNlciIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MjQyNjIyLCJyb2xlIjoiQWRtaW4ifQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  toggleTokenInspector() {
    this.showToken = !this.showToken;
    if (this.showToken && !this.decodedToken) {
      // Simulate decoding
      this.decodedToken = {
        header: { alg: "HS256", typ: "JWT" },
        payload: {
          sub: "1234567890",
          name: "Demo User",
          role: "Admin",
          exp: Math.floor(Date.now() / 1000) + 3600
        },
        signature: "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      };
    }
  }

  // Quiz Section
  quizAnswer: string | null = null;
  quizResult: 'correct' | 'incorrect' | null = null;

  checkQuiz(answer: string) {
    this.quizAnswer = answer;
    if (answer === 'Authorization') {
      this.quizResult = 'correct';
    } else {
      this.quizResult = 'incorrect';
    }
  }
  // --- Challenge 4: Interceptor Simulator ---
  hasTokenAttached = false;
  requestStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  requestResponse = '';

  makeSecureRequest() {
    this.requestStatus = 'loading';
    this.requestResponse = '';

    setTimeout(() => {
      this.requestStatus = this.hasTokenAttached ? 'success' : 'error';
      this.requestResponse = this.hasTokenAttached
        ? '✅ 200 OK: Data retrieved successfully!'
        : '❌ 401 Unauthorized: Missing Authorization header.';
    }, 1000);
  }

  // --- Challenge 5: Role Guard Simulator ---
  currentRole = 'User';

  switchRole(role: string) {
    this.currentRole = role;
    if (this.currentUser) {
      this.currentUser.role = role;
    }
  }

  get canAccessAdminPanel() {
    return this.currentRole === 'Admin';
  }
}
