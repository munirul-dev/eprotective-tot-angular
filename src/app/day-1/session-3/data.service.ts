import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, interval } from 'rxjs';
import { delay, map, filter, take, tap } from 'rxjs/operators';

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

  constructor(private http: HttpClient) { }

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

  // Real HTTP Call
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

  // RxJS Operator Demo Stream
  getNumbersStream(): Observable<number> {
    return interval(1000).pipe(
      take(10), // Take only 10 values
      map(val => val * 2), // Multiply by 2
      filter(val => val > 5) // Only emit if > 5
    );
  }
}
