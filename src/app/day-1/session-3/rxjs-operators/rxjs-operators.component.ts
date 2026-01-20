import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rxjs-operators',
  standalone: false,
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent {
  numbers$: Observable<number>;
  logs: number[] = [];

  constructor(private dataService: DataService) {
    // We don't subscribe immediately
    this.numbers$ = new Observable();
  }

  startStream() {
    this.logs = []; // Clear logs
    this.numbers$ = this.dataService.getNumbersStream();
    this.numbers$.subscribe({
      next: (val) => this.logs.push(val),
      complete: () => console.log('Stream completed')
    });
  }
}
