# Instructor Teaching Guide

This guide outlines the flow and key concepts for the expanded sessions.

---

## Session 3: Services, RxJS & HTTP (1.5 Hours)

**Goal:** Understand how to share data, handle async operations, and interact with APIs.

### 1. Services & Dependency Injection (20 mins)
*   **Concept:** Services are singletons used to share data/logic.
*   **Demo:** Open `data.service.ts`.
    *   Explain `@Injectable({ providedIn: 'root' })`.
    *   Show `BehaviorSubject` as a store of state (State Management light).
    *   **Activity:** Use the "Update User" button in the UI. Show how it updates the data in the service, and any component subscribing to it sees the change.

### 2. Observables & Async Pipe (20 mins)
*   **Concept:** Observables are streams of data over time.
*   **Demo:** Open `async-observable.component.html`.
    *   Explain `currentUser$ | async`.
    *   **Why?** No need to manually `.subscribe()` or `.unsubscribe()` (prevents memory leaks).
    *   Show `getCourses()` simulating network delay with `of().pipe(delay(2000))`.

### 3. RxJS Operators Playground (25 mins) **[NEW]**
*   **Concept:** Manipulating streams before they reach the component.
*   **Demo:** Open `rxjs-operators.component.ts`.
*   **Code Walkthrough:**
    *   `interval(1000)`: Emits 0, 1, 2... every second.
    *   `take(10)`: Auto-stops after 10 emissions.
    *   `map(val => val * 2)`: Transform data (0->0, 1->2, 2->4...).
    *   `filter(val => val > 5)`: Only let values > 5 pass.
*   **Visual:** Click "Start Stream" in UI and watch the numbers appear 6, 8, 10...

### 4. HttpClient & Real APIs (25 mins) **[NEW]**
*   **Concept:** Angular's built-in module for REST APIs.
*   **Setup:** Show `app.module.ts` importing `HttpClientModule`.
*   **Demo:** Open `http-client-demo.component.ts` and `data.service.ts`.
    *   Show `this.http.get<any[]>('...')`.
    *   Explain **Observables** are lazy; the request only happens when you `.subscribe()` (or use `| async`).
*   **Visual:** Click "Fetch Posts" to see live data from JSONPlaceholder.

---

## Session 4: Routing & Modules (1.5 Hours)

**Goal:** Master navigation, route parameters, and protecting routes.

### 1. Routing Basics & RouterLink (20 mins)
*   **Concept:** Mapping URLs to Components.
*   **Demo:** Open `session-4-routing.module.ts`.
    *   Show `Routes` array.
*   **UI:** Click manual links in the "Session 4" card.
    *   Explain `routerLink="/session-4/detail/1"`.
    *   Explain `routerLinkActive="active"` for styling.

### 2. Lazy Loading & Feature Modules (20 mins)
*   **Concept:** Splitting the app into chunks for performance.
*   **Demo:** Show `app-routing.module.ts`.
    *   `loadChildren: () => import(...).then(m => m.Session4Module)`.
    *   Explain how this downloads code only when needed.

### 3. Route Guards (CanActivate) (20 mins)
*   **Concept:** preventing access to routes.
*   **Demo:** Open `auth.guard.ts`.
    *   Simple logic: returns `true` or `false`.
*   **Activity:**
    *   Click "Toggle Auth Guard" to Lock/Unlock.
    *   Try navigating to "Item 1". If locked, it fails (check console or redirect generic).

### 4. Programmatic Navigation (15 mins) **[NEW]**
*   **Concept:** navigating from TypeScript logic (e.g., after a form submit).
*   **Demo:** Open `session-4.component.ts`.
    *   `this.router.navigate(['detail', id], { relativeTo: this.route })`.
    *   Explain `relativeTo` vs absolute paths.

### 5. Route Params & Query Params (15 mins) **[NEW]**
*   **Concept:** Passing data via URL.
*   **Demo:** Open `detail.component.ts`.
    *   **Params:** `/detail/42` -> captured via `route.paramMap`.
    *   **Query Params:** `/detail/1?mode=edit` -> captured via `route.queryParams`.
*   **Visual:** Click "Item 1 + Query Params" button.
    *   Show the resulting URL in browser.
    *   Show "Query Params" JSON dump in the UI.

---

## Lab Exercises (Homework)

1.  **RxJS:** Create a stream that emits "Angular" every 500ms, takes 5 times, and uppercases the string.
2.  **Routing:** Create a "Profile" page that requires a "LoggedIn" guard and takes a `username` query parameter.
