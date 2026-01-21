import { Component } from '@angular/core';
import { Subject, of } from 'rxjs';
import { delay, mergeMap, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-race-condition',
  standalone: false,
  templateUrl: './race-condition.component.html',
  styles: [`
    .race-box { border: 2px dashed #00e676; padding: 15px; background-color: rgba(0, 230, 118, 0.05); }
    input { width: 100%; padding: 10px; margin-bottom: 10px; background: #333; color: white; border: 1px solid #555; }
    .result { font-weight: bold; margin-top: 10px; color: #00e676; }
    .log { font-family: monospace; font-size: 0.8em; color: #aaa; }
  `]
})
export class RaceConditionComponent {
  searchTerm$ = new Subject<string>();
  result = '';
  logs: string[] = [];

  constructor() {
    // BUG: mergeMap handles all requests in parallel. 
    // If 'A' takes 2s and 'B' takes 0.5s, typing 'AB' will result in 'A' overwriting 'B' 
    // because 'A' arrives last.
    this.searchTerm$.pipe(
      mergeMap(term => this.fakeApiCall(term))
      // TODO: Replace 'mergeMap' with 'switchMap' to fix the race condition!
    ).subscribe(response => {
      this.result = response;
      this.logs.unshift(`Received result: "${response}"`);
    });
  }

  onSearch(event: any) {
    const term = event.target.value;
    this.logs.unshift(`Searching for: "${term}"...`);
    this.searchTerm$.next(term);
  }

  fakeApiCall(term: string) {
    // Random delay between 500ms and 2500ms to simulate network unpredictability
    const randomDelay = Math.floor(Math.random() * 2000) + 500;
    return of(`Result for ${term}`).pipe(delay(randomDelay));
  }
}
