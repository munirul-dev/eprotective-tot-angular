import { Component } from '@angular/core';

@Component({
  selector: 'app-session-6',
  standalone: false,
  templateUrl: './session-6.component.html',
  styleUrls: ['./session-6.component.scss']
})
export class Session6Component {
  title = 'Session 6: Forms & Validation';

  // --- Challenge 2: Agent ID (Pattern) ---
  agentId = '';
  agentPattern = /^[A-Z]{3}-\d{3}$/; // ABC-123
  get isAgentIdValid() {
    return this.agentPattern.test(this.agentId);
  }

  // --- Challenge 3: Async Simulator ---
  username = '';
  isChecking = false;
  usernameStatus: 'initial' | 'valid' | 'invalid' = 'initial';
  takenUsernames = ['admin', 'user', 'guest', 'root'];

  checkUsername() {
    if (!this.username) {
      this.usernameStatus = 'initial';
      return;
    }

    this.isChecking = true;
    this.usernameStatus = 'initial';

    // Simulate API call
    setTimeout(() => {
      this.isChecking = false;
      if (this.takenUsernames.includes(this.username.toLowerCase())) {
        this.usernameStatus = 'invalid';
      } else {
        this.usernameStatus = 'valid';
      }
    }, 1500);
  }
}
