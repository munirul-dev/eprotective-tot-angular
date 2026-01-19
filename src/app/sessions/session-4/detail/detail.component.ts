import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  itemId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // 1. Snapshot way (only good if component is not reused)
    // this.itemId = this.route.snapshot.paramMap.get('id');

    // 2. Observable way (reacts to changes while on the same component)
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id');
    });
  }
}
