import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-http-client-demo',
  standalone: false,
  templateUrl: './http-client-demo.component.html',
  styleUrls: ['./http-client-demo.component.scss']
})
export class HttpClientDemoComponent {
  posts$: Observable<any[]>;

  constructor(private dataService: DataService) {
    this.posts$ = new Observable();
  }

  loadPosts() {
    this.posts$ = this.dataService.getPosts();
  }
}
