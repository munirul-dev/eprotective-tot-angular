# Hands-On Guide

This guide supports the 2-day Angular training.

## Day 1: Foundation & Architecture

### Session 1: Welcome & Setup

Refer to [SETUP-AND-INSTALLATION.md](SETUP-AND-INSTALLATION.md) file

### Session 2: Angular Fundamentals

### Session 3: Services & RxJS

### Session 4: Lazy Loading, Guards & Navigation

**Goal:** Implement lazy loading for the Courses module and protect it with an AuthGuard.

#### 1. Lazy Loading Configuration

Open `src/app/app-routing.module.ts`:

```typescript
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
    canActivate: [AuthGuard] // Protect this route
  }
];
```

#### 2. Auth Guard Implementation

Open `src/app/core/auth.guard.ts`:

```typescript
@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
```

## Day 2: Advanced Topics & Deployment

### Session 5: Auth & Keycloak

**Goal:** Implement JWT token handling.

#### 1. Auth Interceptor

Open `src/app/core/auth.interceptor.ts`:

```typescript
intercept(req: HttpRequest<any>, next: HttpHandler) {
  const token = this.auth.getToken();
  // Clone request to add auth header
  const authReq = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  });
  return next.handle(authReq);
}
```

### Session 6: Forms & Validation

**Goal:** Create a registration form with validation.

#### 1. Registration Component

Open `src/app/registration/registration.component.ts`:

```typescript
export class RegistrationComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', Validators.required]
    }, { validators: this.passwordMatch });
  }

  // Custom Validator Logic
  passwordMatch(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirm')?.value;
    return pass === confirm ? null : { mismatch: true };
  }
}
```

### Session 7: Unit Testing with Jasmine

**Goal:** Test the User Service.

#### 1. User Service Test

Open `src/app/core/user.service.spec.ts`:

```typescript
it('should fetch users via GET', () => {
  const mockUsers = [{ id: 1, name: 'John' }];

  service.getUsers().subscribe(users => {
    expect(users.length).toBe(1);
    expect(users).toEqual(mockUsers);
  });

  const req = httpMock.expectOne('/api/users');
  expect(req.request.method).toBe('GET');
  req.flush(mockUsers);
});
```

### Session 8: Build & Deploy

Run the following commands to build for production:

```bash
ng build --configuration=production
```

Analyze bundle size:

```bash
ng build --stats-json && webpack-bundle-analyzer dist/stats.json
```
