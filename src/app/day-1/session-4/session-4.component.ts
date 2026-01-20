import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuard } from './auth.guard';

@Component({
  selector: 'app-session-4',
  standalone: false,
  templateUrl: './session-4.component.html',
  styleUrls: ['./session-4.component.scss']
})
export class Session4Component {
  title = 'Session 4: Routing & Modules';

  constructor(
    private authGuard: AuthGuard,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  toggleGuard() {
    this.authGuard.toggleAuth();
  }

  get isAuth(): boolean {
    return this.authGuard.isLoggedIn();
  }

  goDetail(id: number) {
    // Navigate relative to the current route
    this.router.navigate(['detail', id], { relativeTo: this.route });
  }

  goDetailWithQuery() {
    this.router.navigate(['detail', 1], {
      relativeTo: this.route,
      queryParams: { mode: 'editing', ref: 'newsletter' }
    });
  }
}
