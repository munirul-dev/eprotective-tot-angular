import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression-changed',
  standalone: false,
  templateUrl: './expression-changed.component.html',
  styles: [`
    .error-box { border: 2px dashed #ff5252; padding: 15px; margin-bottom: 20px; background-color: rgba(255, 0, 0, 0.05); }
    .status { font-weight: bold; margin-top: 10px; }
  `]
})
export class ExpressionChangedComponent implements AfterViewInit, OnInit {
  status = 'Loading...';
  // logs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // BUG: Updating a bound property in ngAfterViewInit throws ExpressionChangedAfterItHasBeenCheckedError
    // because Angular has already completed the change detection cycle for this view.

    // Uncommenting the setTimeout fixes it (Option 1)
    // setTimeout(() => {
    this.status = 'Loaded Successfully!';
    // });
  }
}
