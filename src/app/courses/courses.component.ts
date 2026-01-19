import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h2>Courses Module Loaded!</h2>
    <p>This module is lazy loaded.</p>
  `,
  styles: [],
  standalone: false
})
export class CoursesComponent {

}
