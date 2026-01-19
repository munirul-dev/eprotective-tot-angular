import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, User } from '../data.service';

@Component({
  selector: 'app-async-observable',
  standalone: false,
  templateUrl: './async-observable.component.html',
  styleUrls: ['./async-observable.component.scss']
})
export class AsyncObservableComponent implements OnInit {
  // We don't subscribe manually in TS! We let the async pipe handle it.
  courses$: Observable<string[]>;
  currentUser$: Observable<User>;

  constructor(private dataService: DataService) {
    this.courses$ = this.dataService.getCourses();
    this.currentUser$ = this.dataService.currentUser$;
  }

  ngOnInit(): void {
  }

  updateUser() {
    this.dataService.updateUser('Angular Student ' + Math.floor(Math.random() * 100));
  }
}
