import { Component } from '@angular/core';

@Component({
  selector: 'app-session-8',
  standalone: false,
  templateUrl: './session-8.component.html',
  styleUrls: ['./session-8.component.scss']
})
export class Session8Component {
  title = 'Session 8: Build & Deploy';

  // Environment Simulator
  currentEnv: 'dev' | 'staging' | 'prod' = 'dev';

  envConfig = {
    production: false,
    apiUrl: 'http://localhost:3000/api',
    appName: 'Angular Training App (Dev)',
    features: {
      debugMode: true,
      analytics: false
    }
  };

  // Build Simulator
  isBuilding = false;
  buildLogs: string[] = [];
  buildProgress = 0;

  // Deployment Checklist
  checklistItems = [
    { label: 'Run Unit Tests (ng test)', checked: false },
    { label: 'Run Linting (ng lint)', checked: false },
    { label: 'Check Environment Variables', checked: false },
    { label: 'Optimize Images', checked: false },
    { label: 'Update Version Number', checked: false },
    { label: 'Build for Production (ng build --prod)', checked: false }
  ];

  setEnv(env: 'dev' | 'staging' | 'prod') {
    this.currentEnv = env;
    if (env === 'dev') {
      this.envConfig = {
        production: false,
        apiUrl: 'http://localhost:3000/api',
        appName: 'Angular Training App (Dev)',
        features: { debugMode: true, analytics: false }
      };
    } else if (env === 'staging') {
      this.envConfig = {
        production: false,
        apiUrl: 'https://staging-api.example.com',
        appName: 'Angular Training App (Staging)',
        features: { debugMode: true, analytics: true }
      };
    } else {
      this.envConfig = {
        production: true,
        apiUrl: 'https://api.example.com',
        appName: 'Angular Training App',
        features: { debugMode: false, analytics: true }
      };
    }
  }

  startBuild() {
    if (this.isBuilding) return;

    this.isBuilding = true;
    this.buildLogs = ['Starting build process...'];
    this.buildProgress = 0;

    const steps = [
      { msg: 'Compiling TypeScript...', delay: 1000 },
      { msg: 'Bundling Application...', delay: 2000 },
      { msg: 'Optimizing Styles...', delay: 3000 },
      { msg: 'Running Tree Shaking...', delay: 4000 },
      { msg: 'Generating Index.html...', delay: 5000 },
      { msg: 'Build Complete! Output to dist/', delay: 6000 }
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        this.buildLogs.push(step.msg);
        this.buildProgress = ((index + 1) / steps.length) * 100;

        if (index === steps.length - 1) {
          this.isBuilding = false;
        }
      }, step.delay);
    });
  }

  get checklistProgress() {
    const checkedCount = this.checklistItems.filter(item => item.checked).length;
    return Math.round((checkedCount / this.checklistItems.length) * 100);
  }
}
