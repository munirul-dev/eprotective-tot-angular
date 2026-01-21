import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-memory-leak',
  standalone: false,
  templateUrl: './memory-leak.component.html',
  styles: [`
    .leak-box { border: 2px dashed orange; padding: 15px; margin-bottom: 20px; }
    .log-area { background: black; color: lime; padding: 10px; height: 100px; overflow-y: scroll; font-family: monospace; }
  `]
})
export class MemoryLeakComponent implements OnInit, OnDestroy {
  counter = 0;
  logs: string[] = [];
  intervalId: any;

  ngOnInit(): void {
    this.addLog('Component Initialized. Timer Started.');

    // BUG: This interval is never cleared!
    this.intervalId = setInterval(() => {
      this.counter++;
      const message = `Timer Tick: ${this.counter} (I'm still alive!)`;
      console.log(message); // Check console to see it persist even after switching tabs!
      this.addLog(message);
    }, 1000);
  }

  addLog(msg: string) {
    this.logs.unshift(new Date().toLocaleTimeString() + ': ' + msg);
    if (this.logs.length > 20) this.logs.pop();
  }

  ngOnDestroy(): void {
    // TODO: Fix the memory leak by clearing the interval here!
    console.log('Component Destroyed... but is the timer stopped?');
  }
}
