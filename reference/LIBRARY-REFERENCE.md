# Library Reference

Key libraries and tools used in this project.

## Angular Core Packages

- **@angular/core**: Main framework functionality (Components, Directives, Pipes, Dependency Injection).
- **@angular/common**: Common directives (`*ngIf`, `*ngFor`) and pipes (`date`, `async`).
- **@angular/forms**: Reactive Forms (`FormGroup`, `FormControl`, `FormBuilder`) and Template-driven forms.
- **@angular/router**: Navigation, Lazy Loading, Guards (`CanActivate`).
- **@angular/common/http**: `HttpClient`, `HttpInterceptor`.
- **@angular/platform-browser**: Browser-specific utilities (`DomSanitizer`, `Title`).

## Testing Tools

- **Jasmine**: Behavior-Driven Development (BDD) testing framework for JavaScript.
  - `describe()`: Groups tests.
  - `it()`: Defines a test case.
  - `expect()`: Assertions.
  - `spyOn()`: Mocking method calls.
- **Karma**: Test runner for Angular. launches a browser, runs tests, and reports results.
- **HttpClientTestingModule**: Module for mocking HTTP requests in tests (avoids real network calls).

## Build & Tooling

- **Angular CLI**: Command-line interface for creating, building, and testing Angular apps.
  - `ng serve`: Run dev server.
  - `ng build`: Build for production.
  - `ng test`: Run unit tests.
- **RxJS**: Library for reactive programming using Observables. Used heavily in Angular (HTTP, Forms, Routing).
  - `Observable`, `Subject`, `BehaviorSubject`.
  - Operators: `map`, `catchError`, `switchMap`, `takeUntil`.
- **Webpack Bundle Analyzer**: Tool to visualize the size of webpack output files with an interactive zoomable treemap.
