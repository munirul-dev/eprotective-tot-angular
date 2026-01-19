# Code Examples - EPS TOT (Angular)

Reference snippets for the key concepts covered in the training.

## Session 4: Routing

### Lazy Loading Route

**File:** `app-routing.module.ts`

```typescript
{
  path: 'courses',
  loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
  canActivate: [AuthGuard]
}
```

### Auth Guard

**File:** `core/auth.guard.ts`

```typescript
canActivate(): boolean {
  if (this.auth.isLoggedIn()) {
    return true;
  }
  this.router.navigate(['/login']);
  return false;
}
```

## Session 5: Authentication

### HTTP Interceptor

**File:** `core/auth.interceptor.ts`

```typescript
intercept(req: HttpRequest<any>, next: HttpHandler) {
  const token = this.auth.getToken();
  // Clone request is required because HttpRequest is immutable
  const authReq = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  });
  return next.handle(authReq);
}
```

## Session 6: Forms

### Reactive Form Setup with Cross-Field Validation

**File:** `registration/registration.component.ts`

```typescript
this.form = this.fb.group({
  password: ['', [Validators.required, Validators.minLength(8)]],
  confirm: ['', Validators.required]
}, { validators: this.passwordMatch });

passwordMatch(group: AbstractControl): ValidationErrors | null {
  const pass = group.get('password')?.value;
  const confirm = group.get('confirm')?.value;
  return pass === confirm ? null : { mismatch: true };
}
```

## Session 7: Testing

### Service Unit Test (Jasmine)

**File:** `core/user.service.spec.ts`

```typescript
it('should fetch users via GET', () => {
  const mockUsers = [{ id: 1, name: 'John' }];

  // 1. Subscribe to the service method
  service.getUsers().subscribe(users => {
    expect(users).toEqual(mockUsers);
  });

  // 2. Expect and handle the HTTP request
  const req = httpMock.expectOne('/api/users');
  expect(req.request.method).toBe('GET');
  req.flush(mockUsers); // Return mock data
});
```
