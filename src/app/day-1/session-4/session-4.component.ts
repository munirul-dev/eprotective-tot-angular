import { Component } from '@angular/core';
import { AuthGuard } from './auth.guard';

@Component({
  selector: 'app-session-4',
  standalone: false,
  templateUrl: './session-4.component.html',
  styleUrls: ['./session-4.component.scss']
})
export class Session4Component {
  title = 'Session 4: Routing & Modules';

  constructor(private authGuard: AuthGuard) { }

  toggleGuard() {
    this.authGuard.toggleAuth();
  }

  get isAuth(): boolean {
    return this.authGuard.isLoggedIn();
  }
}
