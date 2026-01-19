import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  role: string;
}

@Injectable({
  providedIn: 'root' // Available application-wide (Singleton)
})
export class DataService {
  // BehaviorSubject holds the current value and emits it to new subscribers
  private userSubject = new BehaviorSubject<User>({ id: 0, name: 'Guest', role: 'Visitor' });

  // Expose as Observable so components can't modify it directly
  currentUser$ = this.userSubject.asObservable();

  constructor() { }

  updateUser(name: string) {
    const nextId = this.userSubject.value.id + 1;
    this.userSubject.next({
      id: nextId,
      name: name,
      role: 'Student'
    });
  }

  // Simulate HTTP call with delay
  getCourses(): Observable<string[]> {
    const courses = ['Angular Basics', 'RxJS Masterclass', 'Advanced Patterns'];
    return of(courses).pipe(delay(2000)); // Simulate 2s network latency
  }
}
