import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  day1Sessions = [
    {
      time: '09:00 - 10:30',
      title: 'Session 1: Welcome & Setup',
      desc: 'Env Setup, CLI, VS Code, Project Overview',
      link: '/session-1'
    },
    {
      time: '11:00 - 12:30',
      title: 'Session 2: Angular Fundamentals',
      desc: 'Components, Templates, Binding, Directives',
      link: '/session-2'
    },
    {
      time: '14:30 - 15:30',
      title: 'Session 3: Services & RxJS',
      desc: 'Dependency Injection, Observables, HTTP',
      link: '/session-3'
    },
    {
      time: '16:00 - 17:00',
      title: 'Session 4: Routing & Modules',
      desc: 'Lazy Loading, Guards, Feature Modules',
      link: '/session-4'
    }
  ];

  day2Sessions = [
    {
      time: '09:00 - 10:30',
      title: 'Session 5: Auth & Keycloak',
      desc: 'JWT, Keycloak Integration, Auth Guards',
      link: '/session-5'
    },
    {
      time: '11:00 - 12:30',
      title: 'Session 6: Forms & Validation',
      desc: 'Reactive Forms, Custom Validators, Async',
      link: '/session-6'
    },
    {
      time: '14:30 - 15:30',
      title: 'Session 7: Debugging & Testing',
      desc: 'DevTools, Jasmine, Unit Testing',
      link: '/session-7'
    },
    {
      time: '16:00 - 17:00',
      title: 'Session 8: Build & Deploy',
      desc: 'Optimization, Best Practices, CI/CD',
      link: '/session-8'
    }
  ];

}
