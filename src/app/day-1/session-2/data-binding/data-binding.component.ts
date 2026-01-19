import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: false,
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  // 1. Interpolation
  courseName: string = 'Angular Masterclass';

  // 2. Property Binding
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isButtonDisabled: boolean = true;

  // 4. Two-Way Binding
  username: string = 'Student';

  // 3. Event Binding
  onButtonClick() {
    alert('Button was clicked!');
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  onInput(event: any) {
    console.log('Input value:', event.target.value);
  }
}
