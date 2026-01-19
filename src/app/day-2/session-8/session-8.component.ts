import { Component } from '@angular/core';

@Component({
  selector: 'app-session-8',
  standalone: false,
  templateUrl: './session-8.component.html',
  styleUrls: ['./session-8.component.scss']
})
export class Session8Component {
  title = 'Session 8: Build & Deploy';
  // In a real app, you would import environment.ts
  // import { environment } from 'src/environments/environment';

  // Simulating environment config for demo
  envConfig = {
    production: false,
    apiUrl: 'http://localhost:3000/api',
    appName: 'Angular Training App (Dev)'
  };
}
