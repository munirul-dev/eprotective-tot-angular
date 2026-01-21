import { Component } from '@angular/core';

@Component({
  selector: 'app-slow-component',
  standalone: false,
  templateUrl: './slow-component.component.html',
  styles: [`
    .slow-box { border: 2px dashed purple; padding: 15px; }
    .item { padding: 5px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; }
    input { width: 100%; padding: 8px; margin-bottom: 10px; }
    .badge { background: #6200ea; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8em; }
  `]
})
export class SlowComponentComponent {
  numbers = Array.from({ length: 50 }, (_, i) => i + 1); // [1, 2, ... 50]
  filterText = '';

  // This function is designated to be SLOW
  heavyComputation(num: number): number {
    console.log(`Calculating for ${num}...`); // Watch how many times this runs!

    // Artificially slow payload
    let result = 0;
    for (let i = 0; i < 1000000; i++) { // 1 million iterations
      result += Math.sqrt(i * num);
    }
    return Math.floor(result % 1000);
  }
}
