import { Component } from '@angular/core';

@Component({
  selector: 'app-debugging-dashboard',
  standalone: false,
  templateUrl: './debugging-dashboard.component.html',
  styleUrls: ['./debugging-dashboard.component.scss']
})
export class DebuggingDashboardComponent {
  selectedChallenge: string = 'runtime'; // default
}
