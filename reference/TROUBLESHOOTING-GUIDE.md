# Troubleshooting Guide

This guide provides solutions to common issues you might encounter during the training sessions.

## Common Runtime Errors

### 1. `NullInjectorError: No provider for HttpClient!`

**Cause:** `HttpClientModule` is not imported in `AppModule` or the testing module.
**Solution:**

- Ensure `HttpClientModule` is in the `imports` array of `src/app/app.module.ts`.
- In unit tests, ensure `HttpClientTestingModule` is imported.

### 2. `Can't bind to 'formGroup' since it isn't a known property of 'form'`

**Cause:** `ReactiveFormsModule` is missing.
**Solution:** Import `ReactiveFormsModule` in `src/app/app.module.ts`.

### 3. Loop in Routing (Infinite Redirects)

**Cause:** Incorrect `pathMatch` configuration in routes.
**Solution:** Ensure default routes have `pathMatch: 'full'`:

```typescript
{ path: '', redirectTo: '/courses', pathMatch: 'full' }
```

### 4. Lazy Loading 404 Not Found

**Cause:** Incorrect path in `loadChildren` import.
**Solution:** Verify the path to the module file is correct relative to `app-routing.module.ts`.

## Build & Deployment Issues

### 1. "Budget exceeded" Warning/Error

**Cause:** The bundle size is larger than the budget defined in `angular.json`.
**Solution:**

- Optimize imports.
- Increase the budget in `angular.json` under `configurations.production.budgets`.

### 2. Assets 404 after Deployment

**Cause:** Incorrect `baseHref`.
**Solution:** Build with the correct base href:

```bash
ng build --base-href /my-app/
```

## Debugging Tools

### Browser DevTools (F12)

- **Console:** Check for red error messages.
- **Network Tab:** Verify API requests (Status 200 vs 401/403). Check Payload and Headers (Authorization Bearer token).
- **Sources:** Use `debugger;` or click line numbers to set breakpoints.

### Angular DevTools Extension

- Inspect the component tree.
- Check Input/Output property values in real-time.
- Profiler tab for performance debugging.
