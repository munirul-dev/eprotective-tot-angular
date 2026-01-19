import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: false,
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  isVisible: boolean = true;

  students = [
    { id: 1, name: 'Alice', score: 85 },
    { id: 2, name: 'Bob', score: 72 },
    { id: 3, name: 'Charlie', score: 90 },
    { id: 4, name: 'Diana', score: 65 }
  ];

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  getColor(score: number): string {
    return score >= 80 ? 'green' : (score >= 70 ? 'orange' : 'red');
  }
}
